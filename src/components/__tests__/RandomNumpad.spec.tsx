import * as React from 'react';
import { spy } from 'sinon';
import { shallow } from 'enzyme';

import RandomNumpad from '../RandomNumpad';

describe('RandomNumpad Component Suite', () => {
  const getComponent = () => shallow(<RandomNumpad onChange={spy()} />);

  describe('FocusOnScroll Component', () => {
    test('should render 12 buttons', () => {
      const buttonComponents = getComponent().find('button');
      expect(buttonComponents).toHaveLength(12);
    });
  });
});
