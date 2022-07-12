import { useContext } from 'react';
import { Context } from './index';

type ContextProps = {
  value: number;
  setValue: (number) => void;
};

export function useValue() {
  const context = useContext(Context);

  const { value, setValue } = context as ContextProps;

  return {
    value,
    setValue
  };
}
