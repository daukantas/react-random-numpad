import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import RandomNumPad from '../components/RandomNumpad';

const stories = storiesOf('RandomNumPad', module);

stories.addDecorator(withKnobs);

stories.add('Basic Example', withInfo({
  source: false,
  inline: true,
})(() => {
  return (
    <RandomNumPad
    />
   );
}));
