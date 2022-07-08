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
            <Image src={PlusSvg} width={60} height={60} />
          </span>
          <Image src={FillingSvg} width={100} height={100} />
          <strong className="text-[48px] text-blue-400 font-flexoBold leading-[48px]">
            Simulação
            <br /> de Taxas
          </strong>
        </div>
        <div className="flex-1 flex flex-col items-center pt-[68px]">
          <h2 className="text-[36px] text-blue-400 font-flexoBold">
            Valor desejado
          </h2>
          <div className="flex flex-row gap-[30px] py-7">
            <input
              type="number"
              placeholder="R$ 0,00"
              className="bg-gray-200 w-[368px] h-[60px] px-2 text-center text-[24px] font-flexoRegular leading-10"
            />
            <button className="bg-orange-400 w-[160px] rounded-[5px] py-2 text-[20px] font-flexoBold text-gray-200 leading-[24px] ">
              Calcular
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
