import { shuffle } from '../utils';

describe('Utils suite', () => {
  describe('shuffle', () => {
    it('empty  should return empty', () => {
      const result = shuffle([]);
      expect(result).toEqual([]);
    });
    it('one item should return same', () => {
      const result = shuffle([1]);
      expect(result).toEqual([1]);
    });
    it('two items should return swap', () => {
      const result = shuffle([-1, 1]);
      expect(result).toEqual([1, -1]);
    });
    it('multiple items should return shuffle', () => {
      const array = [12, 1, 42, 8];
      const result = shuffle(array);
      expect(result).not.toEqual(array);
    });
  });
});
