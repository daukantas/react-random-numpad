import * as React from 'react';
import { spy } from 'sinon';
import { shallow } from 'enzyme';

import RandomNumpad from '../RandomNumpad';

describe('RandomNumpad Component Suite', () => {
  describe('FocusOnScroll Component', () => {
    test('should render 11 buttons', () => {
      const component = shallow(<RandomNumpad onChange={spy()} />);
      const buttonComponents = component.find('button');
      expect(buttonComponents).toHaveLength(11);
    });
    test('should render 12 buttons', () => {
      const component = shallow(<RandomNumpad onChange={spy()} supportDecimal />);
      const buttonComponents = component.find('button');
      expect(buttonComponents).toHaveLength(12);
    });
  });
});
