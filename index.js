/**
 * Merge object b with object a.
 *
 *     var a = { foo: 'bar' }
 *       , b = { bar: 'baz' };
 *
 *     merge(a, b);
 *     // => { foo: 'bar', bar: 'baz' }
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object}
 * @api public
 */

exports = module.exports = function (a, b) {
  if (a && b) {
    var allowedAttrs = Object.getOwnPropertyNames(b);
    console.log(allowedAttrs)
    for (var allowedAttrs in b) {
      a[allowedAttrs] = b[allowedAttrs];
    }
  }
  return a;
};