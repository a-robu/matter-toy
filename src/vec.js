
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

    add(other) {
        return new Vec(this.x + other.x, this.y + other.y)
    }

    static fromObject(obj) {
        return new Vec(obj.x, obj.y)
    }

    /* Alternative notation V(1, 2) instead of new Vec(1, 2). */
    static V(...args) {
        return new Vec(...args)
    }
}

module.exports = Vec
