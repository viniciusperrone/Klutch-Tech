import { useState } from 'react';
import api from '@server/api';
import { ICustomer } from '@shared/interfaces';

export function useFindCustomer() {
  const [data, setData] = useState<ICustomer | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<boolean>(false);

  async function fetchingData(cpf: string) {
    setIsFetching(true);
    setData(null);

    try {
      const response = await api.post('/search', { cpf: cpf });

      if (response.data) {
        setData(response.data);
        setError(false);
      }
    } catch (error) {
      setError(true);
    } finally {
      setIsFetching(false);
    }
  }

  return {
    data,
    error,
    fetchingData,
    isFetching
  };
}
