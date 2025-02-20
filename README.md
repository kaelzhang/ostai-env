[![build][bb]][bl]
[![Coverage](https://codecov.io/gh/kaelzhang/ostai-env/branch/master/graph/badge.svg)](https://codecov.io/gh/kaelzhang/ostai-env)

[bb]: https://github.com/kaelzhang/ostai-env/actions/workflows/nodejs.yml/badge.svg
[bl]: https://github.com/kaelzhang/ostai-env/actions/workflows/nodejs.yml

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
type Converter = (
  value: any,
  // The key of the env variable
  key: string,
  // If the env key does not exist, then `is_default` is true
  is_default: boolean
) => any

env(key: string, converter?: Converter | Array<Converter> | null, defaults?: any): any
```

- **key** `string` environment key
- **converter?** `Converter | Array<Converter> | null` the method to convert env value
- **defaults?** `any` the default value if environment key is not found

```js
const port = env('SERVER_PORT', env.integer, 80)
```

### Converter functions

- `env.boolean` which treats `'true'` / `'1'` / `Y` / etc as `true`
- `env.integer` converts the given value to an integer.
- `env.required` if the env variable is not found, an `RangeError` will throw

## License

MIT
