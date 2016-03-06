'use strict'

var hasOwn = Object.prototype.hasOwnProperty

module.exports = mapStruct

var blacklist = ['set', '_type', '_version']

function mapStruct (struct, map) {
  var result = {}

  for (var key in struct) {
    if (~blacklist.indexOf(key)) continue
    if (hasOwn.call(struct, key)) {
      result[key] = map(struct[key], key, struct)
    }
  }

  return result
}
