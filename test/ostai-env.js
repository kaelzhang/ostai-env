const {test} = require('ava')
const env = require('../src')

const CASES = [
  [() => env('BOOLEAN_A', env.boolean), false],
  // 1
  [() => env('BOOLEAN_B', env.boolean), true],
  [() => env('BOOLEAN_C', env.boolean), true],
  [() => env('BOOLEAN_D', env.boolean), false],
  [() => env('BOOLEAN_D', env.boolean, true), false],
  [() => env('BOOLEAN_E', env.boolean, true), true],

  // 6
  [() => env('INTEGER_A', env.integer), 1],
  [() => env('INTEGER_B', env.integer), 0],
  [() => env('INTEGER_C', env.integer), 0],
  [() => env('INTEGER_C', env.integer, 1), 0],
  [() => env('INTEGER_D', env.integer, 1), 1],

  [() => env('NORMAL_A'), 'a'],
  [() => env('NORMAL_A', null), 'a'],
  [() => env('NORMAL_B'), ''],
  [() => env('NORMAL_B', null), ''],
  [() => env('NORMAL_C', null, 'foo'), 'foo']
]

CASES.forEach(([factory, expect], i) => {
  test(`${i}`, t => {
    t.is(factory(), expect)
  })
})
