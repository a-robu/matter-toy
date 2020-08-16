
class WrongDimensions extends Error {}

class Vec extends Array {
    constructor(...args) {
        if (args.length != 2) {
            throw new WrongDimensions('x and y are required')
        }
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
