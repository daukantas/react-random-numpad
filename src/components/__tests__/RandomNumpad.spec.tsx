import * as React from 'react';

import { shallow } from 'enzyme';
import RandomNumpad from '../RandomNumpad';

describe('RandomNumpad Component Suite', () => {
  const getComponent = () => shallow(<RandomNumpad />);

  describe('FocusOnScroll Component', () => {
    test('should render with defaults', () => {
      expect(getComponent()).toMatchSnapshot();
    });
  });
});
