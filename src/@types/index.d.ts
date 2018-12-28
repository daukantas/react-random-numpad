export interface IRandomNumpadState {
  input: string;
}

export interface IRandomNumpadProps {
  className?: string;
  onChange: (value: string) => void;
}
