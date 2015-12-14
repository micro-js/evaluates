/**
 * Expose evaluates
 */

module.exports = evaluates['default'] = evaluates

/**
 * Check if syntax is supported
 * @param  {String} code
 * @return {Boolean}
 */

function evaluates (code) {
  try {
    eval(code)
    return true
  } catch (e) {
    return false
  }
}
