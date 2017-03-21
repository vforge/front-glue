[![npm][npm]][npm-url]
[![release][release]][release-url]
[![travis][travis]][travis-url]

# front-glue

[![Greenkeeper badge](https://badges.greenkeeper.io/vforge/front-glue.svg)](https://greenkeeper.io/)
Ready to use Front-End boilerplate based on ES6 and PostCSS (and Webpack)

## Installing
```bash
yarn
```

## Running
Replace files in `./scripts` and `./styles` directories.

* `npm run build:dev` will build dev version of the source
* `npm run build:prod` will build production version of the source

Alternatively you can use the following commands for watching the files and
rebuilding them automatically:

* `npm run watch:dev` will build dev version of the source
* `npm run watch:prod` will build production version of the source

Watching files require `watchman-make` tool to be installed.

Output files are put in `./build` direcotry.

## Linting
There's a build-in ESLint:

```bash
npm run linter
```


[npm]: https://img.shields.io/npm/v/front-glue.svg
[npm-url]: https://npmjs.com/package/front-glue

[release]: https://img.shields.io/github/release/vforge/front-glue.svg
[release-url]: https://github.com/vforge/front-glue/releases

[travis]: https://img.shields.io/travis/vforge/front-glue.svg
[travis-url]: https://travis-ci.org/vforge/front-glue
