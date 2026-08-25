# TestGIT

A small static website used to learn the full software delivery cycle: version control, build, test, package, and CI/CD deployment to GitHub Pages.

## Stack

- Plain HTML/CSS/JS
- [Vite](https://vite.dev/) — dev server and production build/bundler
- [Vitest](https://vitest.dev/) — unit tests
- GitHub Actions — CI/CD pipeline
- GitHub Pages — hosting

## Local commands

```bash
npm install       # install dependencies
npm run dev       # start local dev server with hot reload
npm test          # run the unit tests (Vitest)
npm run build     # build the production bundle into dist/ ("package" step)
npm run preview   # locally preview the production build from dist/
```

## Project layout

```
index.html          entry HTML page
src/main.js          app entry point
src/counter.js        example interactive component
src/math.js           pure functions (unit tested)
test/math.test.js       Vitest unit tests
.github/workflows/ci-cd.yml  CI/CD pipeline definition
dist/                (generated, not committed) build output / deployable package
```

## Version control workflow

1. Make changes on a feature branch: `git checkout -b my-change`
2. Commit small, focused changes: `git add -A && git commit -m "message"`
3. Push the branch: `git push -u origin my-change`
4. Open a Pull Request into `main` on GitHub
5. The CI/CD pipeline runs automatically on the PR (test + build)
6. Once merged into `main`, the pipeline also deploys the site to GitHub Pages

## CI/CD pipeline (`.github/workflows/ci-cd.yml`)

Two jobs:

- **build-and-test** — runs on every push and pull request targeting `main`:
  installs dependencies (`npm ci`), runs tests (`npm test`), builds the site
  (`npm run build`), and uploads `dist/` as a Pages artifact.
- **deploy** — runs only on pushes to `main` (not on PRs), and publishes the
  uploaded artifact to GitHub Pages.

This mirrors a real pipeline: every change is tested and built, but only
changes that land on `main` are actually deployed.

## Enabling GitHub Pages (one-time repo setting)

In the GitHub repo: **Settings → Pages → Build and deployment → Source →
GitHub Actions**. After that, every push to `main` will deploy automatically
and the site URL will appear on that same Pages settings page and in the
workflow run's `deploy` job output.

## Releasing a version (optional "package" step)

The app version lives in `package.json` (`version` field, semver:
`MAJOR.MINOR.PATCH`). To cut a release:

```bash
npm version patch   # bumps version, creates a git commit + tag
git push --follow-tags
```

You can then create a GitHub Release from that tag, optionally attaching the
`dist/` build as a downloadable artifact.
