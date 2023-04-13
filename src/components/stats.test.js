import { max, min, sort } from './stats'

describe('stats', () => {
    it('get max', () => {
        expect(max([1,2,3,4,5])).toBe(5);
    });
    it('get min', () => {
        expect(min([1,2,3,4,5,6,])).toBe(1);
    })
    it('sort num array', () => {
        expect(sort([5,4,3,2,1])).toEqual([1,2,3,4,5]);
    }) 
})