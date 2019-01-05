import * as React from 'react';

import { shuffle } from '../helpers/utils';
import {
  IRandomNumpadState,
  IRandomNumpadProps,
} from '../@types';

import * as styles from './styles.css';

class RandomNumpad
  extends React.PureComponent<IRandomNumpadProps, IRandomNumpadState> {
  public randomArray: number[] = [];
  public state = {
    input: '',
  };
  constructor(props: IRandomNumpadProps) {
    super(props);
    this.randomArray = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  }

  public addNumber = (value: number | string) => {
    this.setState((prevState: IRandomNumpadState) => ({
      input: prevState.input.concat(value.toString()),
    }), () => {
      this.props.onChange(this.state.input);
    });
  }

  public addDecimal = () => {
    if (this.state.input.indexOf('.') < 0) {
      this.addNumber('.');
    }
  }

  public removeNumber = () => {
    this.setState((prevState: IRandomNumpadState) => ({
      input: prevState.input.slice(0, prevState.input.length - 1),
    }), () => {
      this.props.onChange(this.state.input);
    });
  }

  public clearNumber = () => {
    this.setState({
      input: '',
    }, () => {
      this.props.onChange(this.state.input);
    });
  }

  public render(): React.ReactNode {
    const { className, supportDecimal } = this.props;
    return (
      <div className={`${className} ${styles.numpad}`}>
        {
          this.randomArray.map((value, index) => (
            <button
              onClick={() => this.addNumber(value)}
              className={styles.buttonKey}
              key={`random-numpad-${index}`}
            >
              {value}
            </button>
          ))
        }
        {
          supportDecimal &&
          <button className={styles.buttonKey} onClick={this.addDecimal}> . </button>
        }
        <button className={styles.buttonKey} onClick={this.removeNumber}> X </button>
      </div>
    );
  }
}
export default RandomNumpad;
