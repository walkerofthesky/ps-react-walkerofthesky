import React from 'react';
import {shallow} from 'enzyme';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  test('getWidthAsPercentOfTotalWidth should return 250 with 500 total width and 50%', () => {
    const wrapper = shallow(<ProgressBar percent={50} width={500} />);
    const width = wrapper.instance().getWidthAsPercentOfTotalWidth();

    expect(width).toBe(250);
  });
});
