export interface IRandomNumpadState {
  input: string;
}

export interface IRandomNumpadProps {
  className?: string;
  supportDecimal?: boolean;
  onChange: (value: string) => void;
}
