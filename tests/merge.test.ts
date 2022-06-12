import {merge} from '../src/merge';

describe('Testing merge', () => {
    test('Empty array case', () => {
      expect(merge([],[])).toEqual([]);
    });

    test('Duplicate number case', () => {
      expect(merge([1,1,2,3],[1,2,3,4])).toEqual([1,1,1,2,2,3,3,4]);
      expect(merge([1,1,1,1],[2,2,2,2])).toEqual([1,1,1,1,2,2,2,2]);
      expect(merge([4,5,6,9],[1,3,5,9])).toEqual([1,3,4,5,5,6,9,9]);
    });

    test('Normal case', () => {
      expect(merge([4,5,6,9],[1,2,3,7])).toEqual([1,2,3,4,5,6,7,9]);
      expect(merge([1,2],[3,4])).toEqual([1,2,3,4]);
      expect(merge([1],[4])).toEqual([1,4]);
    });
  });
