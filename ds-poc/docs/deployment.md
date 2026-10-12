# Deployment and visual testing

GitHub Actions runs two pipelines. Both install dependencies in `ds-poc` and build that Storybook. The workflow files live at the repository root, which is where GitHub looks for them.

## GitHub Pages

[`.github/workflows/deploy-storybook.yml`](../../.github/workflows/deploy-storybook.yml) runs on every push to `main`, and when someone starts it by hand. It runs `npm run build-storybook`, uploads `storybook-static` with `actions/upload-pages-artifact`, and publishes that artifact with `actions/deploy-pages`.

The site is [https://lulumuts.github.io/storybook-figma/](https://lulumuts.github.io/storybook-figma/). The repository Pages source is GitHub Actions.

## Chromatic

[`.github/workflows/chromatic.yml`](../../.github/workflows/chromatic.yml) runs on every push. Checkout uses `fetch-depth: 0` so Chromatic can see the commits between the branch and its baseline. The workflow sends `projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}` to `chromaui/action`.

Create a repository secret named `CHROMATIC_PROJECT_TOKEN` and set it to the Chromatic project token. The token stays in GitHub secrets. It is not committed.

`npm run chromatic` runs `chromatic --exit-zero-on-changes` for a local publish. A local run still exits successfully when snapshots differ. The GitHub workflow does not pass that flag, so a visual change fails the check.

## Baseline first

Chromatic compares a branch build with the latest accepted build on `main`. Publish `main` and let that Chromatic run finish before opening a pull request that changes the UI.

`demo/token-change` darkens `--color-primary` in `src/tokens.css`. It is not merged. Open it as a pull request only after the `main` baseline exists, so Chromatic has an accepted build to compare against.
