import {merge} from '../src/merge';

describe('testing merge', () => {
    test('two empty array should return empty array', () => {
      expect(merge([],[])).toEqual([]);
    });
  });