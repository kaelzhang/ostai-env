const ENV = process.env

const env = (key, converter, defaults) => {
  const has = key in ENV
  const v = ENV[key]

  // - not defined
  if (!has) {
    return defaults
  }

  return converter
    ? converter(v)
    : v
}

env.boolean = v => v === 'true' || v === '1'
env.integer = v => parseInt(v, 10) || 0

module.exports = env
