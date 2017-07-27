import { getWidthAsPercentOfTotalWidth } from './percentUtils';

describe('getWidthAsPercentOfTotalWidth', () => {
  test('should return 250 with 500 total width and 50%', () => {
    const width = getWidthAsPercentOfTotalWidth(50, 500);
    expect(width).toBe(250);
  });
});
