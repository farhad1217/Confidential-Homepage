import { test, expect } from '@playwright/test';
import content from '../src/data/content.json' with { type: 'json' };

// These tests exercise the real Vite production build, not the offline QA harness.
test.beforeEach(async ({ page }) => {
  await page.route('https://fonts.googleapis.com/**', (route) => route.abort());
  await page.route('https://fonts.gstatic.com/**', (route) => route.abort());
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.locator('#revamp-app')).toHaveAttribute('data-motion', 'reduced');
});

for (const width of [320, 360, 390, 768, 1024, 1280, 1440]) {
  test(`responsive layout at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    const fits = await page.evaluate(() => {
      const heading = document.querySelector('h1').getBoundingClientRect();
      return document.documentElement.scrollWidth <= innerWidth && heading.left >= 0 && heading.right <= innerWidth;
    });
    expect(fits).toBe(true);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('.feature-card')).toHaveCount(6);
  });
}

test('all three journeys and all nine screenshot scenes work', async ({ page }) => {
  for (const journey of content.journeys) {
    const tab = page.locator(`#tab-${journey.id}`);
    const panel = page.locator(`#journey-${journey.id}`);
    await tab.click();
    await expect(tab).toHaveAttribute('aria-selected', 'true');
    await expect(panel).toBeVisible();
    for (let index = 0; index < 3; index += 1) {
      await panel.locator('.step-button').nth(index).click();
      await expect(panel.locator('.tour-scene:not([hidden])')).toHaveCount(1);
      await expect(panel.locator('.tour-scene').nth(index)).toBeVisible();
      await expect(panel.locator('.tour-scene').nth(index).locator('h4')).toHaveText(journey.scenes[index].title);
    }
  }
});

test('tabs support keyboard navigation', async ({ page }) => {
  await page.locator('#tab-data').focus();
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('#tab-numbers')).toHaveAttribute('aria-selected', 'true');
  await expect(page.locator('.journey-tab[tabindex="0"]')).toHaveCount(1);
  await page.keyboard.press('End');
  await expect(page.locator('#tab-ai')).toHaveAttribute('aria-selected', 'true');
  await page.keyboard.press('Home');
  await expect(page.locator('#tab-data')).toHaveAttribute('aria-selected', 'true');
});

test('mobile menu traps focus and restores it after Escape', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator('#menu-open').click();
  await expect(page.locator('#mobile-menu')).toBeVisible();
  await expect(page.locator('#menu-open')).toHaveAttribute('aria-expanded', 'true');
  for (let i = 0; i < 15; i += 1) await page.keyboard.press('Tab');
  expect(await page.evaluate(() => Boolean(document.activeElement.closest('#mobile-menu')))).toBe(true);
  await page.keyboard.press('Escape');
  await expect(page.locator('#mobile-menu')).toHaveCount(0);
  await expect(page.locator('#menu-open')).toBeFocused();
  await expect(page.locator('body')).not.toHaveClass(/dialog-open/);
});

test('screenshot modal has a full-size option and restores focus', async ({ page }) => {
  const opener = page.locator('#journey-data .screen-image').first();
  await opener.click();
  await expect(page.locator('#image-dialog')).toBeVisible();
  await expect(page.locator('#zoom-image')).toHaveAttribute('src', /search\.webp$/);
  await page.locator('#image-fit').click();
  await expect(page.locator('.image-dialog-body')).toHaveClass(/is-full-size/);
  await page.keyboard.press('Escape');
  await expect(page.locator('#image-dialog')).toHaveCount(0);
  await expect(opener).toBeFocused();
});

test('all six FAQ answers expand and collapse', async ({ page }) => {
  for (let index = 0; index < content.faqs.length; index += 1) {
    const item = page.locator('.faq-item').nth(index);
    const control = item.locator('summary');
    await control.click();
    await expect(control).toHaveAttribute('aria-expanded', 'true');
    await expect(item.locator('.faq-answer')).toBeVisible();
    await expect(item.locator('.faq-answer')).toHaveText(content.faqs[index].a);
    await control.click();
    await expect(control).toHaveAttribute('aria-expanded', 'false');
    await expect(item.locator('.faq-answer')).toBeHidden();
  }
});

test('GSAP initializes from the built npm dependencies', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await expect(page.locator('#revamp-app')).toHaveAttribute('data-motion-engine', 'gsap-scrolltrigger');
  await expect(page.locator('#revamp-app')).toHaveAttribute('data-motion', 'full');
  await page.locator('.motion-toggle').click();
  await expect(page.locator('#revamp-app')).toHaveAttribute('data-motion', 'reduced');
  await expect(page.locator('#plans')).toBeVisible();
  await page.locator('.motion-toggle').click();
  await expect(page.locator('#revamp-app')).toHaveAttribute('data-motion', 'full');
});

test('system reduced motion is respected', async ({ page }) => {
  await expect(page.locator('.motion-toggle')).toBeDisabled();
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
  expect(await page.evaluate(() => document.getAnimations().filter((animation) => animation.playState === 'running').length)).toBe(0);
});

test('no uncaught page errors after reloading', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.reload();
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('#revamp-app')).toHaveAttribute('data-motion', 'reduced');
  expect(errors).toEqual([]);
});
