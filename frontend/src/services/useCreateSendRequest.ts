import { useState } from 'react';
import api from '@server/api';
import { ISolicitation, ISolicitationResponse } from '@shared/interfaces';

export function useCreateSendRequest() {
  const [data, setData] = useState<ISolicitationResponse | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<boolean>(false);

  async function fetchingData(data: ISolicitation) {

    try {
      const response = await api.post('/send-request', { ...data });

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
