import Image from 'next/image';
import { Header } from '../components/Header';

import FillingSvg from '../assets/icons/filling-orange.svg';
import PlusSvg from '../assets/icons/plus.svg';
import Link from 'next/link';

export default function FindCustomer() {
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

        <main className="flex-1 pt-8 flex flex-col gap-8 items-center">
          <h2 className="text-2xl font-flexoRegular text-blue-400">
            Busque o Cliente
          </h2>

          <div className="flex flex-row">
            <input
              className="h-10 bg-gray-200 rounded-l-[5px] pl-4"
              type="text"
            />
            <button className="px-5 h-10 bg-blue-400 rounded-r-[5px] text-[14px] font-flexoBold text-white hover:opacity-80">
              Buscar
            </button>
          </div>

          <div className="px-10 pt-[22px] pb-8 flex flex-col gap-5 items-center bg-gray-200">
            <h2 className="text-[20px] font-flexoRegular text-gray-900">
              Cliente encontrado:
            </h2>
            <h2 className="text-[20px] font-flexoRegular text-orange-400">
              072.119.055-93
            </h2>
            <h2 className="text-[22px] font-flexoBold text-blue-600">
              Lara Test
            </h2>
            <Link href={'enter-card-data'}>
              <button className="w-[200px] h-[60px] bg-blue-400 rounded-[5px] text-[24px] font-flexoBold text-white hover:opacity-80">
                Solicitar
              </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
