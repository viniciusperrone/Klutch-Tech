import { useContext } from 'react';
import { Context } from './index';
import { IStorage } from '@shared/interfaces';

type ContextProps = {
  storage: IStorage;
  setStorage: (data: IStorage) => void;
};

export function useStorage() {
  const context = useContext(Context);

  const { storage, setStorage } = context as ContextProps;

  return {
    storage,
    setStorage
  };
}
