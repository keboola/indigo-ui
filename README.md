# Indigo UI

[![Build Status](https://travis-ci.org/keboola/indigo-ui.svg?branch=master)](https://travis-ci.org/keboola/indigo-ui)
[![npm](https://img.shields.io/npm/v/@keboola/indigo-ui.svg)](https://yarnpkg.com/en/package/@keboola/indigo-ui)
[![license](https://img.shields.io/github/license/keboola/indigo-ui.svg)](https://github.com/keboola/indigo-ui/blob/master/LICENSE)

Indigo UI library, its CSS and React components. Also Styleguide app showing usages of this library.

## Development

1. Make sure you have Node 8 installed `node -v`
2. Install grunt: `npm install -g grunt`
3. Install dependencies: `yarn`
4. Run storybook `yarn storybook`
5. Open browser at [http://localhost:9009/](http://localhost:9009/)

### Docker

1. Build: `docker-compose build` (See `Dockerfile` to check what's inside)
2. Run container: `docker-compose run --rm --service-ports node`
3. Continue from step 3. (including) in section above (`yarn`, `yarn storybook`, ...)

### Simultaneously with Keboola Connection (Docker only)

Check [KBC.md](KBC.md)

## Local Development (KBC <-> Indigo)

1. Checkout desired branch in KBC
2. Checkout branch with dependant styles to KBC branch
3. run `yarn link` in Indigo root
4. run `yarn storybook '@keboola/indigo-ui'` in kbc-ui root
5. run `yarn start` in kbc-ui
6. run `yarn build-lib` in Indigo (also run it after every change of styles in Indigo)

## Deployment

First, check the content of `.travis.yml` file and documentation about
[Travis Deployment](https://docs.travis-ci.com/user/deployment).

### Storybook

- Storybook is deployed on every push to `master` branch. There's `"$TRAVIS_BRANCH" = "master"`
condition in `.travis.yml`.
- The `deploy-storybook.sh` script is responsible for deploying. Basically, it's a "home made"
replacement for Travis `deploy` section, since that section is used for something else (covered
bellow).
- After successful deployment, the Storybook build will be available online

#### Releasing new version

- Before pushing new tag, make sure you know what are you doing.
- New tagged release is only needed if there's a change in `src/indigo` or `src/components` folders
and you want to make those changes available for users.
- Please respect Semantic versioning

Steps:

1. Make sure everything is working as expected
2. Prepare new version with `yarn version` command. Just follow instructions. This command should create new commit (with
version change in `package.json`) and tag for you. **There's no need to change `package.json`
manually or create tag manually.**
3. Push to `master` branch - e.g `git push origin master`
4. Check if everything is as expected
5. Push newly created tag - e.g. `git push origin v2.0.0-beta-3` <- This triggers deploy!
5. Check package in npmjs registry, try to install it or update to newer version from some project
6. Write release notes [keboola/indigo-ui/releases](https://github.com/keboola/indigo-ui/releases)

## FAQ

### How to check what will be published to npmjs registry before pushing new tag?

Run `npm pack`. Check its manual [here](https://docs.npmjs.com/cli/pack).

### How to run tests?

Run `yarn test`. It'll start tests in interactive mode.

### How to create new component?

1. Create new component file in `src/indigo/components` (e.g. `Loader.jsx`).
2. Add tests (if needed) and snapshots for new component (e.g. `Loader.test.js`).
3. Add new component to main file `src/indigo/components/index.js` to enable its export.
