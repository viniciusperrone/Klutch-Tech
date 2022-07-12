import React, { createContext, useState } from 'react';
import { ReactNode } from 'react';
import {
  ICustomer,
  IInstallmentsHook,
  ISolicitationResponse,
  IStorage
} from '@shared/interfaces';

type Props = {
  children: ReactNode;
};

export const Context = createContext({});

export default function ContextProvider({ children }: Props) {
  const [installmentClient, setInstallmentClient] =
    useState<IInstallmentsHook | null>();
  const [customer, setCustomer] = useState<ICustomer | null>();
  const [request, setRequest] = useState<ISolicitationResponse | null>();
  const [value, setValue] = useState<number>();
  const [storage, setStorage] = useState<IStorage>({} as IStorage);
  return (
    <Context.Provider
      value={{
        installmentClient,
        setInstallmentClient,
        customer,
        setCustomer,
        value,
        setValue,
        request,
        setRequest,
        storage,
        setStorage
      }}
    >
      {children}
    </Context.Provider>
  );
}
