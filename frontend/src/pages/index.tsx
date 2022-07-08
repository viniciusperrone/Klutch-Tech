import React from 'react';
import Image from 'next/image';

import { Header } from '../components/Header';
import FillingSvg from '../assets/icons/filling-orange.svg';
import PlusSvg from '../assets/icons/plus.svg';

export default function Home() {
  return (
    <div className="flex-1">
      <Header />
      <main className="flex-1 pt-[30px]">
        <div className="flex w-full pl-[18.2vw] items-center gap-10">
          <span>
            <Image src={PlusSvg} width={65} height={65} />
          </span>
          <Image src={FillingSvg} width={115} height={115} />
          <strong className="text-[56px] text-blue-400 font-flexoBold leading-[56px]">
            Simulação
            <br /> de Taxas
          </strong>
        </div>
        <div className="flex-1 flex flex-col items-center pt-[68px]">
          <h2 className="text-[40px] text-blue-400 font-flexoBold">
            Valor desejado
          </h2>
          <div className="flex flex-row gap-[30px] py-7">
            <input
              type="number"
              placeholder="R$ 0,00"
              className="bg-gray-200 w-[368px] h-10 text-center"
            />
            <button className="bg-orange-400 text-gray-200 w-[160px]">
              Calcular
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
