import { useContext } from 'react';
import { Context } from './index';
import { ICustomer } from '@shared/interfaces';

type ContextProps = {
  customer: ICustomer;
  setCustomer: (data: ICustomer) => void;
};

export function useCustomer() {
  const context = useContext(Context);

  const { customer, setCustomer } = context as ContextProps;

  return {
    customer,
    setCustomer
  };
}
