import api from '@server/api';
import { useState } from 'react';

export function useRateTable<T = unknown>() {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const [price, setPrice] = useState<number>();

  async function fetchingData() {
    setData(null);
    setIsFetching(true);
    try {
      const response = await api.get('/');

      setData(response.data);
    } catch (error) {
      setError(true);
    } finally {
      setIsFetching(false);
    }
  }

  return {
    data,
    price,
    setPrice,
    error,
    fetchingData,
    isFetching
  };
}
