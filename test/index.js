/**
 * Imports
 */

var evaluates = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should eval func', function (t) {
  t.ok(evaluates('function noop () {}'))
  t.end()
})

test('should not eval typo func', function (t) {
  t.notOk(evaluates('funcon noop () {}'))
  t.end()
})
