
const Vec = require('./vec')

describe('Vec', () => {
    describe('== equality', () => {
        it('can be equal to regular Array', () => {
            expect(new Vec(1, 2)).toEqual([1, 2])
        })
    
        it('can be equal to another Vec', () => {
            expect(new Vec(1, 2)).toEqual(new Vec(1, 2))
        })
    
        it('does not equal if an element differs', () => {
            expect(new Vec(1, 2)).not.toEqual(new Vec(-100, 2))
        })
    })

    describe('.x and .y', () => {
        it('property access works', () => {
            expect((new Vec(1, 2)).x).toEqual(1)
            expect((new Vec(1, 2)).y).toEqual(2)
        })
    })

    describe('.scale', () => {
        it('can make the Vec bigger', () => {
            expect((new Vec(1, 2)).scale(2)).toEqual(new Vec(2, 4))
        })
    })

    describe('.fromObject', () => {
        it('can pick out the .x and .y props', () => {
            expect(Vec.fromObject({x: 1, y: 2})).toEqual(new Vec(1, 2))
        })
    })

    describe('.add', () => {
        it('adds the individual .x and .y components', () => {
            expect((new Vec(1, 2)).add(new Vec(-3, 0))).toEqual(new Vec(-2, 2))
        })
    })

    describe('V()', () => {
        it('is interchangeable shorthand notation', () => {
            expect(Vec.V(1, 2)).toEqual(new Vec(1, 2))
        })
    })
})
