'use strict'

Object.is(1, 1)
Object.is(NaN, NaN)
Object.is(0, -0)
Object.is(true, true)
Object.is(null, null)
Object.is(undefined, undefined)
Object.is({}, {})
Object.is([], [])

const a = [1, 2, 3]
Object.is(a, a)

const b = {name: 'kyaw kyaw'}
Object.is(b, b)