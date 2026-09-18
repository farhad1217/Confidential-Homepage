# Git to Vercel deployment

## 1. Replace the application, not just the preset

Keep a backup or a Git commit of the previous static version. In the new revision, use the complete contents of this React project. Do not leave the previous entrypoint, Python requirements, old Node scripts or the old package-lock mixed into the application root. Preserve your repository's `.git` directory when replacing local project files.

The repository root should look like this:

```
package.json
vercel.json
vite.config.js
index.html
src/
public/
scripts/
```

A new private repository is also a clean option. Upload the source files, not the ZIP and not `node_modules`.

## 2. Root Directory

If `package.json` is visible immediately when you open the Git repository, use the default root (`./`). If everything is nested under `Confidential Homepage/`, set Root Directory to that folder instead. There must be only one intended application root.

## 3. Build and Development settings

- Framework / Application Preset: **Vite**.
- Node.js Version: **22.x**.
- Install Command: `npm install`.
- Build Command: `npm run build`.
- Output Directory: `dist`.
- No environment variables are needed for the supplied homepage.

The supplied `vercel.json` records the framework and commands, so the repository contains the intended configuration. In an existing Vercel project, check the old overrides as well. Do not choose Next.js, Vue, Other or Create React App for this version.

## 4. Commit and deploy

After a successful local npm installation, include its newly generated package-lock.json in your commit. Never copy the old static package's lockfile.

```sh
npm install
npm run check
npm run build
git add .
git commit -m "Convert premium homepage to React and Vite"
git push
```

Vercel can then build from the connected Git revision. Verify the branch/commit in the deployment log. For the first migration build, clearing the old build cache can prevent confusion with older artifacts.

## 5. Verify the result

Open the homepage, try all three tours, enlarge a screenshot, use the menu at mobile width, expand the FAQ, and switch decorative motion off and on. Check image requests and the browser console. The current dependency declarations must actually install and build before the migration is considered release-tested.

Expected build path: npm installation -> source checks -> Vite production build -> `dist` output. There is no Python build command in this repository.

## Troubleshooting

**Vite is not recognized / not found:** run `npm install` successfully in the correct root. Check the Node version and the complete npm error.

**No output directory named dist:** inspect the earlier build error rather than changing the output to the repository root. Vite must finish first.

**Python packages are still being installed:** confirm that you deployed the new Git commit, selected the React application root, removed old runtime configuration, and are using the supplied `npm install` command. The earlier partial log alone did not establish a final build failure.

**npm ci complains about a missing lockfile:** the supplied install command is `npm install`; use it once and commit the lockfile it generates.

**Old design still visible:** confirm the linked repository/branch and that the new commit was deployed. Do not copy a stale `dist` directory from the static release.

**Network EAI_AGAIN:** npm could not resolve its registry hostname. This is what blocked dependency installation in the authoring environment; it is not evidence that the same error will occur on Vercel.

## Confidentiality

A private Git repository, `noindex` metadata and `public: false` in vercel.json do not make the rendered website access-controlled. The `public` setting concerns Vercel logs/source views. Configure suitable deployment access protection and get client authorization before distributing the preview URL. The supplied X-Robots-Tag and robots.txt discourage indexing; they are not authentication.

## Official references

- Vite on Vercel: https://vercel.com/docs/frameworks/frontend/vite
- Build configuration: https://vercel.com/docs/builds/configure-a-build
- vercel.json: https://vercel.com/docs/project-configuration/vercel-json
- Node versions: https://vercel.com/docs/functions/runtimes/node-js/node-js-versions
- Vite requirements: https://vite.dev/guide/
