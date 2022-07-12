import React, { useState } from 'react';
import Image from 'next/image';
import className from 'classnames';
import { FadeLoader } from 'react-spinners';

import { useInstallments } from '@hooks/useInstallments';
import { useValue } from '@hooks/useValue';

import { useRateTable } from '@services/useRateTable';
import { IRateTable } from '@shared/interfaces';

import { Header } from '@components/Header';
import { Button } from '@components/Buttton';
import { Table } from '@components/Table';
import { Error } from '@components/Error';
import { Footer } from '@components/Footer';

import FillingSvg from 'assets/icons/filling-orange.svg';
import PlusSvg from 'assets/icons/plus.svg';

export default function Home() {
  const [message, setMessage] = useState<string>();
  const [error, setError] = useState<boolean>(false);
  const { installmentClient, setInstallmentClient } = useInstallments();
  const { value, setValue } = useValue();

  const {
    data,
    price,
    setPrice,
    fetchingData,
    isFetching,
    error: errorFetching
  } = useRateTable<IRateTable[]>();

  async function handleCalculate() {
    setInstallmentClient(null);
    if (!value || value < 300 || value > 10000) {
      setError(true);
      setMessage('Valor deve está no intervalo de R$ 300 a R$ 10000');
      setTimeout(() => {
        setError(false);
      }, 2600);
      return;
    }

    setPrice(value);

    await fetchingData();

    if (errorFetching) {
      setError(true);
      setMessage('Error de conexão, tente novamente!');
      setTimeout(() => {
        setError(false);
      }, 2600);
      return;
    }
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
            Simulação
            <br /> de Taxas
          </strong>
        </div>
        <div className="flex-1 flex flex-col items-center pt-[68px]">
          <h2 className="text-[30px] text-blue-400 font-flexoBold">
            Valor desejado
          </h2>
          <div className="flex flex-row gap-[30px] py-7">
            <input
              type="number"
              placeholder="R$ 0,00"
              className="bg-gray-200 w-[368px] h-[45px] rounded-[5px] px-2 text-center text-[20px] font-flexoMedium leading-10"
              value={value}
              onChange={e => setValue(Number(e.target.value))}
            />
            <Button
              title="Calcular"
              disabled={error}
              onClick={handleCalculate}
            />
          </div>
        </div>
      </div>

      <main
        className={className('flex-1 pt-8', {
          'pb-[200px]': !isFetching,
          'max-h-full flex justify-center items-center': isFetching
        })}
      >
        {isFetching && !data ? (
          <FadeLoader
            className="my-5 opacity-60"
            width={4}
            height={14}
            color="#228A95"
          />
        ) : (
          <>
            {data &&
              !error &&
              data.map(table => (
                <Table
                  key={table.id}
                  multiple
                  id={table.id}
                  name={table.name}
                  installments={table.installments}
                  value={price}
                />
              ))}{' '}
          </>
        )}
      </main>

      {error && <Error message={message} />}

      {installmentClient && <Footer value={price} />}
    </div>
  );
}
