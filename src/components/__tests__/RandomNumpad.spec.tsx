import * as React from 'react';

import { shallow } from 'enzyme';
import RandomNumPad from '../RandomNumPad';

describe('RandomNumPad Component Suite', () => {
  const getComponent = () => shallow(<RandomNumPad />);

  describe('FocusOnScroll Component', () => {
    test('should render with defaults', () => {
      expect(getComponent()).toMatchSnapshot();
    });
  });
});
