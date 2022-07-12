import Image from 'next/image';
import Link from 'next/link';

import { Header } from '@components/Header';
import FillingSvg from 'assets/icons/filling-orange.svg';
import PlusSvg from 'assets/icons/plus.svg';

export default function PaymentMethod() {
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

        <main className="flex-1 mt-10 pt-8 flex flex-col gap-8 items-center">
          <h1 className="text-[20px] font-flexoRegular text-blue-400">
            Escolha a modalidade:
          </h1>
          <Link href={'enter-card-data'}>
            <button className="w-[260px] h-[60px] bg-blue-400 rounded-[5px] text-[24px] font-flexoBold text-white hover:opacity-80">
              Cartão de Crédito
            </button>
          </Link>
          <h2 className="text-[20px] font-flexoRegular ">Ou</h2>
          <div className="flex flex-col items-end gap-1">
            <button
              className="w-[260px] h-[60px] bg-blue-400 opacity-25 rounded-[5px] text-[24px] font-flexoBold text-white"
              disabled={true}
            >
              Crédito Consignado
            </button>
            <p className="text-[14px] font-flexoMedium">Em breve</p>
          </div>
        </main>
      </div>
    </div>
  );
}
