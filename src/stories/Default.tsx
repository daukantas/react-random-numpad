import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import * as styles from './styles.css';

import RandomNumpad from '../components/RandomNumpad';

const stories = storiesOf('RandomNumpad', module);

stories.addDecorator(withKnobs);

class StoryComponent extends React.PureComponent<{}, { value: string }> {
  public state = {
    value: '',
  };

  public onChange = (value: string) => {
    this.setState({
      value,
    });
  }

  public render(): React.ReactNode {
    return (
      <div className={styles.storyComponent}>
        <input value={this.state.value} className={styles.input}/>
        <RandomNumpad onChange={this.onChange} className='custom-class' />
      </div>
    );
  }
}

stories.add('Basic Example', (() => {
  return (
    <StoryComponent />
   );
}));
