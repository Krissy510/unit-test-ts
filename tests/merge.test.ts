import {merge} from '../src/merge';

describe('testing merge', () => {
    test('Two empty array should return empty array', () => {
      expect(merge([],[])).toEqual([]);
    });
  });
