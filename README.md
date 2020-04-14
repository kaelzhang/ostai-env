[![Build Status](https://travis-ci.org/kaelzhang/ostai-env.svg?branch=master)](https://travis-ci.org/kaelzhang/ostai-env)
[![Coverage](https://codecov.io/gh/kaelzhang/ostai-env/branch/master/graph/badge.svg)](https://codecov.io/gh/kaelzhang/ostai-env)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/kaelzhang/ostai-env?branch=master&svg=true)](https://ci.appveyor.com/project/kaelzhang/ostai-env)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/ostai-env.svg)](http://badge.fury.io/js/ostai-env)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/ostai-env.svg)](https://www.npmjs.org/package/ostai-env)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/ostai-env.svg)](https://david-dm.org/kaelzhang/ostai-env)
-->

# ostai-env

Manage and get `process.env`

## Install

```sh
$ npm i @ostai/env
```

## Usage

```ts
env(key: string, converter?: Function | null, defaults?: any): any
```

- **key** `string` environment key
- **converter** `?Function(value: any): any` the method to convert env value
- **defaults** `any` the default value if environment key is not found

```js
const port = env('SERVER_PORT', env.integer, 80)
```

## Converter functions

- `env.boolean` which treats `'true'` and `'1'` as `true`
- `env.integer`

## License

MIT
