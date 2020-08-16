
const assert = require('assert')

class Vec extends Array {
    constructor(...args) {
        assert.equal(args.length, 2, 'x and y are required')
        super(...args)
    }

    get x() {
        return this[0]
    }

    get y() {
        return this[1]
    }

    scale(scalar) {
        return new Vec(this.x * scalar, this.y * scalar)
    }
}

module.exports = Vec
