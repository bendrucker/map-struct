'use strict'

var test = require('tape')
var Struct = require('observ-struct')
var map = require('./')

test(function (t) {
  t.plan(3)

  var state = Struct({
    a: 1,
    b: 2
  })

  var result = map(state, function (value, key, _state_) {
    t.equal(_state_, state)
    return value + 1
  })

  t.deepEqual(result, {
    a: 2,
    b: 3
  })
})
