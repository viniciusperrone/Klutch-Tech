import { FormEvent, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FadeLoader } from 'react-spinners';
import InputMask from 'react-input-mask';

import { useCustomer } from '@hooks/useCustomer';
import { useValue } from '@hooks/useValue';
import { useRequest } from '@hooks/useRequest';
import { useInstallments } from '@hooks/useInstallments';

import { useCreateSendRequest } from '@services/useCreateSendRequest';
import { ISolicitation } from '@shared/interfaces';

import { Header } from '@components/Header';
import FillingSvg from 'assets/icons/filling-orange.svg';
import PlusSvg from 'assets/icons/plus.svg';
import VisaLogo from 'assets/images/visa.png';
import { Error } from '@components/Error';

export default function EnterCardData() {
  const router = useRouter();
  const { customer } = useCustomer();
  const { installmentClient } = useInstallments();
  const { value: price } = useValue();
  const { setRequest } = useRequest();

  const [sendRequestData, setSendRequestData] = useState({} as ISolicitation);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  const {
    data,
    fetchingData,
    isFetching,
    error: errorFetching
  } = useCreateSendRequest();

  function onChange(value: string | number, name: string) {
    setSendRequestData({ ...sendRequestData, [name]: value });
  }
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (
      !sendRequestData.cardName ||
      !sendRequestData.cardNumber ||
      !sendRequestData.expirationDate ||
      !sendRequestData.cvc
    ) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2600);
      setMessage('Dados inválidos!');

      return;
    }

    if (!customer.id || !installmentClient.id || !installmentClient.table) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2600);
      setMessage('Erro no envio da solicitação!');

      return;
    }

    setSendRequestData({
      clientId: customer.id,
      installmentId: installmentClient.id,
      rateTableId: installmentClient.table,
      installmentInterest: installmentClient.installmentInterest,
      installmentInterestValue: (
        (installmentClient.installmentInterest * price) /
        installmentClient.installment
      ).toFixed(2),
      desiredValue: price,
      totalLoan: installmentClient.installment * price,
      ...sendRequestData
    });

    await fetchingData({ ...sendRequestData });

    setRequest({ ...data });

    if (!errorFetching && data) {
      router.push('/apply-for-loan');

      return;
    }

    setError(true);
    setTimeout(() => {
      setError(false);
    }, 2600);
    setMessage('Erro de conexão!');
  }

  return (
    <div>
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
        <form
          className="flex-1 py-[50px] flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <main className="py-[50px] flex flex-row gap-[60px]">
            <div className="flex flex-col items-center gap-7">
              <h1 className="text-[14px] font-flexoRegular text-blue-400">
                Insira os dados do Cartão:
              </h1>
              <InputMask
                className="w-[300px] h-[45px] bg-gray-200 rounded-[5px] px-[20px] text-[14px] font-flexoBoldIt"
                type="text"
                placeholder="Nome do Cartão"
                value={sendRequestData.cardName}
                onChange={e => onChange(e.target.value, 'cardName')}
              />
              <div className="w-[300px] h-[45px] bg-gray-200 rounded-[5px] pr-[5px] flex flex-row justify-between">
                <InputMask
                  className="w-[80%] h-full bg-gray-200 rounded-l-[5px] px-[20px] text-[14px] font-flexoBoldIt"
                  type="text"
                  mask="9999 9999 9999 9999"
                  placeholder="0000 0000 0000 0000"
                  value={sendRequestData.cardNumber}
                  onChange={e => onChange(e.target.value, 'cardNumber')}
                />
                <Image src={VisaLogo} alt="Card" width={45} height={45} />
              </div>
              <InputMask
                className="w-[300px] h-[45px] bg-gray-200 rounded-[5px] px-[20px] text-[14px] font-flexoBoldIt"
                type="text"
                mask="99/99/99"
                placeholder="Data de Validade"
                value={sendRequestData.expirationDate}
                onChange={e => onChange(e.target.value, 'expirationDate')}
              />
              <InputMask
                className="w-[300px] h-[45px] bg-gray-200 rounded-[5px] px-[20px] text-[14px] font-flexoBoldIt"
                type="text"
                mask="999"
                placeholder="CVC"
                value={sendRequestData.cvc}
                onChange={e => onChange(e.target.value, 'cvc')}
              />
            </div>
            <div className="flex flex-col items-center gap-7">
              <h1 className="text-[14px] font-flexoRegular text-blue-400">
                Faça o upload dos anexos do cartão:
              </h1>
              <div className="w-[300px] h-[45px] bg-gray-200 rounded-[5px] flex px-[20px] flex-row justify-between items-center">
                <h3 className="text-[14px] font-flexoBoldIt">
                  Cartão de Crédito (Frente)
                </h3>
                <span className="cursor-pointer">
                  <p className="text-[12px] font-flexRegular underline">
                    Adicionar
                  </p>
                </span>
              </div>
              <div className="w-[300px] h-[45px] bg-gray-200 rounded-[5px] flex px-[20px] flex-row justify-between items-center">
                <h3 className="text-[14px] font-flexoBoldIt">
                  Cartão de Crédito (Frente)
                </h3>
                <span className="cursor-pointer">
                  <p className="text-[12px] font-flexRegular underline">
                    Adicionar
                  </p>
                </span>
              </div>
              <div className="w-[300px] h-[45px] bg-gray-200 rounded-[5px] flex px-[20px] flex-row justify-between items-center">
                <h3 className="text-[14px] font-flexoBoldIt">
                  Cartão de Crédito (Frente)
                </h3>

                <span className="cursor-pointer">
                  <p className="text-[12px] font-flexRegular underline">
                    Adicionar
                  </p>
                </span>
              </div>
              <strong className="text-[12px] font-flexoRegular text-blue-400">
                Atenção: As fotos devem estar legíveis, com todas as <br />
                informações visíveis do cartão.
              </strong>
            </div>
          </main>
          {isFetching ? (
            <FadeLoader
              className="my-5 opacity-60"
              width={4}
              height={14}
              color="#228A95"
            />
          ) : (
            <>
              {error ? (
                <Error message={message} />
              ) : (
                <button
                  className="w-[300px] h-[60px] bg-blue-400 rounded-[5px] text-[26px] font-flexoBold text-white hover:opacity-80 transition"
                  disabled={isFetching}
                >
                  {' '}
                  Continuar
                </button>
              )}
            </>
          )}
        </form>
      </div>
    </div>
  );
}
