# Indigo UI

[![Build Status](https://travis-ci.com/keboola/indigo-ui.svg?branch=master)](https://travis-ci.com/keboola/indigo-ui) [![npm](https://img.shields.io/npm/v/@keboola/indigo-ui.svg)](https://yarnpkg.com/en/package/@keboola/indigo-ui) [![license](https://img.shields.io/github/license/keboola/indigo-ui.svg)](https://github.com/keboola/indigo-ui/blob/master/LICENSE)

Indigo UI library, its CSS and React components. Also Styleguide app showing usages of this library.

## Development

1. Make sure you have Node 16 installed `node -v`
2. Install grunt: `yarn global add grunt-cli`
3. Install dependencies: `yarn`
4. Run storybook `yarn dev`
5. Open browser at [http://localhost:9009/](http://localhost:9009/)

### Docker

1. Build: `docker-compose build` (See `Dockerfile` to check what's inside)
2. Run container: `docker-compose run --rm --service-ports node`
3. Continue from step 3. (including) in section above (`yarn`, `yarn dev`, ...)

### Available commands

- `yarn dev`: Start Storybook server
- `yarn test`: Run tests
- `yarn build-lib`: Build package prepared for publishing to npmjs registry
- `yarn build-storybook`: Prepare Storybook for deployment
- `yarn stylelint`: Check less files for errors

### Creating new React Component

1. Create new component file in `src/indigo/components` (e.g. `Loader.jsx`).
2. Add tests (if needed) and snapshots for new component (e.g. `Loader.test.js`).
3. Add new component to main file `src/indigo/components/index.js` to enable its export.

### Check local build of `indigo-ui` in `kbc-ui`

Make sure you have package prepared `yarn build-lib`.

#### Using `yarn link` (preferred)

- [indigo-ui] `yarn link`
- [kbc-ui] `yarn link "@keboola/indigo-ui"`

[See `yarn link` docs](https://yarnpkg.com/en/docs/cli/link)

Similar (but reversed) process applies for `yarn unlink`.

#### Using `yarn add`

- [kbc-ui] `yarn add file:/path/to/indigo-ui`

[See `yarn add` docs](https://yarnpkg.com/lang/en/docs/cli/add/)

### Simultaneously with Keboola Connection (Advanced, Docker only)

Check [KBC.md](KBC.md)

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
- New tagged release is only needed if there's a change in `src/indigo` folder and you want to make
  those changes available for users.
- Please respect Semantic versioning

Steps:

1. Make sure everything is working as expected
2. Prepare new version with `yarn version` command. Just follow instructions. This command should
   create new commit (with
   version change in `package.json`) and tag for you. **There's no need to change `package.json`
   manually or create tag manually.**
3. Push to `master` branch - e.g `git push origin master`
4. Check if everything is as expected
5. Push newly created tag - e.g. `git push origin v2.0.0-beta-3` <- This triggers deploy to npmjs!
6. Check package in npmjs registry, try to install it or update to newer version from some project
7. Write release notes [keboola/indigo-ui/releases](https://github.com/keboola/indigo-ui/releases)

## FAQ

### How to run tests?

Run `yarn test`. It'll start tests in interactive mode.

### How to check what will be published to npmjs registry before pushing new tag?

Run `npm pack`. Check its manual [here](https://docs.npmjs.com/cli/pack).

### How to check react-bootstrap documentation at specific version

If published version does not match installed version.

```console
git clone git@github.com:react-bootstrap/react-bootstrap.git
cd react-bootstrap
git fetch --all
git checkout v0.31.5 # use version you need
npm run docs
```

Open browser at `localhost:4000`
