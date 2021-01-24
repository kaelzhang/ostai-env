const make_array = require('make-array')

const ENV = process.env

const env = (key, converter, defaults) => {
  const is_default = !(key in ENV)
  const v = is_default
    ? defaults
    : ENV[key]

  const converters = make_array(converter)

  return converters.reduce((prev, c) => c(prev, key, is_default), v)
}

env.boolean = v => v === 'true'
  || v === '1'
  || v === 'Y'
  || v === 'y'
  || v === 'yes'
  || v === true

env.integer = v => parseInt(v, 10) || 0

env.required = (v, key, is_default) => {
  if (is_default) {
    const error = new RangeError(`env "${key}" is required`)
    error.code = 'ENV_REQUIRED'

    throw error
  }

  return v
}

module.exports = env
