import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import InputMask from 'react-input-mask';
import { FadeLoader } from 'react-spinners';

import { useCustomer } from '@hooks/useCustomer';
import { useFindCustomer } from '@services/useFindCustomer';

import { Header } from '@components/Header';
import { Error } from '@components/Error';
import FillingSvg from 'assets/icons/filling-orange.svg';
import PlusSvg from 'assets/icons/plus.svg';

export default function FindCustomer() {
  const router = useRouter();
  const { setCustomer } = useCustomer();
  const [cpf, setCpf] = useState<string>();
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  const {
    data,
    fetchingData,
    error: errorFetching,
    isFetching
  } = useFindCustomer();

  async function handleSearchCustomer() {
    await fetchingData(cpf);

    if (errorFetching && !isFetching) {
      setError(true);
      setMessage('Cliente não encontrado!');
      setTimeout(() => {
        setError(false);
      }, 2600);
      return;
    }
  }

  function handleSendRequest() {
    setCustomer({ ...data });

    router.push('payment-method');
  }

  return (
    <div className="flex-1 flex flex-col">
      <Header />
      <div className="flex-1 pt-[30px]">
        <div className="flex w-full pl-[18.2vw] items-center gap-10">
          <span>
            <Image src={PlusSvg} width={60} height={60} />
          </span>
          <Image src={FillingSvg} width={100} height={100} />
          <strong className="text-[48px] text-blue-400 font-flexoBold leading-[48px]">
            Solicitar
            <br /> Empréstimo
          </strong>
        </div>

        <main className="flex-1 pt-8 flex flex-col gap-8 items-center">
          <h2 className="text-2xl font-flexoRegular text-blue-400">
            Busque o Cliente
          </h2>

          <div className="flex flex-row">
            <InputMask
              className="h-10 bg-gray-200 rounded-l-[5px] pl-4"
              mask="999.999.999-99"
              value={cpf}
              onChange={e => setCpf(e.target.value)}
            ></InputMask>

            <button
              className="px-5 h-10 bg-blue-400 rounded-r-[5px] text-[14px] font-flexoBold text-white hover:opacity-80"
              onClick={handleSearchCustomer}
              disabled={isFetching}
            >
              Buscar
            </button>
          </div>

          {isFetching && (
            <div className="py-12 flex justify-center items-center">
              <FadeLoader
                className="opacity-60"
                width={4}
                height={14}
                color="#228A95"
              />
            </div>
          )}
          {data && (
            <div className="px-10 pt-[22px] pb-8 flex flex-col gap-5 items-center bg-gray-200">
              <h2 className="text-[20px] font-flexoRegular text-gray-900">
                Cliente encontrado:
              </h2>
              <h2 className="text-[20px] font-flexoRegular text-orange-400">
                {data.cpf}
              </h2>
              <h2 className="text-[22px] font-flexoBold text-blue-600">
                {data.name}
              </h2>
              <button
                className="w-[200px] h-[60px] bg-blue-400 rounded-[5px] text-[24px] font-flexoBold text-white hover:opacity-80"
                onClick={handleSendRequest}
              >
                Solicitar
              </button>
            </div>
          )}
        </main>
      </div>
      {error && <Error message={message} />}
    </div>
  );
}
