import { useContext } from 'react';
import { Context } from './index';
import { IInstallmentsHook } from '@shared/interfaces';

type ContextProps = {
  installmentClient: IInstallmentsHook;
  setInstallmentClient: (data: IInstallmentsHook) => void;
};

export function useInstallments() {
  const context = useContext(Context);

  const { installmentClient, setInstallmentClient } = context as ContextProps;

  return {
    installmentClient,
    setInstallmentClient
  };
}
