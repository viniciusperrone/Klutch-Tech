import { useContext } from 'react';
import { Context } from './index';
import { ISolicitationResponse } from '@shared/interfaces';

type ContextProps = {
  request: ISolicitationResponse;
  setRequest: (data: ISolicitationResponse) => void;
};

export function useRequest() {
  const context = useContext(Context);

  const { request, setRequest } = context as ContextProps;

  return {
    request,
    setRequest
  };
}
