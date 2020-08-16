
const Vec = require('./vec')

describe('Vec', () => {
    describe('== equality', () => {
        it('can equal a regular Array', () => {
            expect(new Vec(1, 2)).toEqual([1, 2])
        })
    
        it('it can be equal to another Vec', () => {
            expect(new Vec(1, 2)).toEqual(new Vec(1, 2))
        })
    
        it('differs from other Vecs if the elements are different', () => {
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
        it('can make bigger', () => {
            expect((new Vec(1, 2)).scale(2)).toEqual(new Vec(2, 4))
        })
    })
})
