
Vec = class extends Array {
    constructor(x, y) {
        assert.equal(arguments.length, 2, 'x and y are required')
        super(x, y)
    }
    get x() {return this[0]}
    get y() {return this[1]}
    scale(scalar) {
        return this.map(x => x * scalar)
    }
}
// prop access
assert.equal((new Vec(1, 2)).x, 1, 'access property x')
assert.equal((new Vec(1, 2)).y, 2, 'access property y')

// scaling
// assert.equal((new Vec(1, 2)).scale(2), new Vec(2, 4))

module.exports = Vec
