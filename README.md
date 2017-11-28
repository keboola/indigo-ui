# Indigo UI

[![Build Status](https://travis-ci.org/keboola/indigo-ui.svg?branch=master)](https://travis-ci.org/keboola/indigo-ui)

Indigo UI library, its CSS and React components. Also Styleguide app showing usages of this library.

## Development

1. Install grunt: `npm install -g grunt`
2. Install dependencies: `yarn`
3. Run storybook `yarn storybook`
4. Open browser at [http://localhost:9009/](http://localhost:9009/)

### Docker

1. Build: `docker-compose build` (See `Dockerfile` to check what's inside)
2. Run container: `docker-compose run --rm --service-ports node`
3. Continue from step 2. (including) in section above (`yarn`, `yarn storybook`, ...)

## Deployment

First, check the content of `.travis.yml` file and documentation about
[Travis Deployment](https://docs.travis-ci.com/user/deployment).

Before pushing new tag, make sure you know what are you doing.

### Storybook

- Storybook is deployed on every push to `master` branch. There's `"$TRAVIS_BRANCH" = "master"`
condition in `.travis.yml`.
- The `deploy-storybook.sh` script is responsible for deploying. Basically, it's a "home made"
replacement for Travis `deploy` section, since that section is used for something else (covered
bellow).
- After successful deployment, the Storybook build will be available online

### UI library, its CSS and components

- When you push new tag then `yarn build-dist-css` command is executed. There's
`"$TRAVIS_BRANCH" = "$TRAVIS_TAG"` condition in `.travis.yml`.
- After successful build, a deployment and publishing to registry is started. Check `deploy`
section in
`.travis.yml`
- After successful deployment, there will be new version of CSS available to link from Cloudfront
and package published to npmjs registry.

### Registration in Keboola Connection

TBD

#### Releasing new version

- New tagged release is only needed if there's a change in `src/indigo` or `src/components` folders
and you want to make those changes available for users.
- Please respect Semantic versioning

Steps:

1. Make sure everything is working as expected
2. Prepare new version with `npm version ...` command
(manual [here](https://docs.npmjs.com/cli/version)). This command should create new commit (with
version change in `package.json`) and tag for you. **There's no need to change `package.json`
manually or create tag manually.**
3. Push to `master` branch - e.g `git push origin master`
4. Check if everything is as expected
5. Push newly created tag - e.g. `git push origin v2.0.0-beta-3` <- This triggers deploy!
5. Check package in npmjs registry, try to install it or update to newer version from some project
6. Write release notes [keboola/indigo-ui/releases](https://github.com/keboola/indigo-ui/releases)


## Older, `kbc-bootstrap` branch

This branch was introduced only for compatibility with
[keboola/kbc-bootstrap](https://github.com/keboola/kbc-bootstrap). Releases from this branch are
tagged as `v0.1.x` and you probably won't need to do anything with this branch. All releases are
available [here](https://github.com/keboola/indigo-ui/releases)

## Older, `v1` branch

This branch contains some changed, but we decided to skip it and start with `v2` and smaller,
incremental steps.

## FAQ

### How to check what will be published to npmjs registry before pushing new tag?

Run `npm pack`. Check its manual [here](https://docs.npmjs.com/cli/pack).
