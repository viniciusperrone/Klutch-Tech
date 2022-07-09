import Image from 'next/image';
import { Header } from '../components/Header';

import FillingSvg from '../assets/icons/filling-orange.svg';
import PlusSvg from '../assets/icons/plus.svg';

export default function ApplyForLoan() {
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

        <main className="flex-1 pt-8 flex flex-col gap-8 items-center"></main>
      </div>
    </div>
  );
}
