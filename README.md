[![npm][npm]][npm-url]
[![node][node]][node-url]
[![travis][travis]][travis-url]

<div style="border:1px solid #f00;color:#f00">
  <strong>Warning</strong> This repository is currently WiP.
</div>

# front-glue
Ready to use Front-End boilerplate based on ES6 and PostCSS (and Webpack)

## Installing
```bash
npm install
```

## Running
Replace files in `./scripts` and `./styles` directories.

* `npm run build.dev` will build dev version of the source
* `npm run build.prog` will build production version of the source

Alternatively you can use the following commands for watching the files and
rebuilding them automatically:

* `npm run watch.dev` will build dev version of the source
* `npm run watch.prog` will build production version of the source

Output files are put in `./build` direcotry.


[npm]: https://img.shields.io/npm/v/front-glue.svg
[npm-url]: https://npmjs.com/package/front-glue

[node]: https://img.shields.io/node/v/front-glue.svg
[node-url]: https://nodejs.org

[travis]: https://img.shields.io/travis/vforge/front-glue.svg
[travis-url]: https://travis-ci.org/vforge/front-glue
