import Image from 'next/image';
import { Header } from '../components/Header';

import FillingSvg from '../assets/icons/filling-orange.svg';
import PlusSvg from '../assets/icons/plus.svg';
import ArrowUpSvg from '../assets/icons/arrow-up.svg';
import ArrowDownSvg from '../assets/icons/arrow-down.svg';
import CheckSvg from '../assets/icons/check.svg';
import { Table } from '../components/Table';
import { useRouter } from 'next/router';

export default function ApplyForLoan() {
  const router = useRouter();

  function handleDone() {
    router.push('request-feedback');
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
          <div className="w-[400px] h-[70px] bg-gray-200 rounded-[5px] ml-[55px] flex flex-row px-[24px] items-center gap-[54px]">
            <h3 className="text-[20px] font-flexoBoldIt text-blue-400">
              Tabela
            </h3>
            <div className="w-[230px] h-[65%] bg-white rounded-[5px] flex px-[10px] justify-between items-center">
              <strong className="text-[22px] font-flexoBoldIt text-orange-400">
                Tabela Padrão
              </strong>
              <div className="flex flex-col gap-1">
                <span className="h-[15px] cursor-pointer hover:opacity-60">
                  <Image src={ArrowUpSvg} width={10} height={10} />
                </span>
                <span className="h-[15px] cursor-pointer hover:opacity-80 flex justify-start">
                  <Image src={ArrowDownSvg} width={10} height={10} />
                </span>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 pt-8 pb-[150px] flex flex-col gap-8 items-center">
          <div className="px-[50px] flex flex-row flex-wrap justify-center gap-5">
            <div className="w-[580px] h-[70px] bg-green-100 rounded-[5px] flex flex-row px-[24px] justify-between items-center gap-[54px]">
              <h3 className="text-[20px] font-flexoBoldIt text-blue-400">
                Valor desejado
              </h3>
              <div className="w-[230px] h-[65%] bg-white rounded-[5px] flex px-[10px] justify-between items-center">
                <strong className="text-[22px] font-flexoBoldIt text-orange-400">
                  R$ 1.000,00
                </strong>
              </div>
            </div>
            <div className="w-[580px] h-[70px] bg-green-100 rounded-[5px] flex flex-row px-[24px] justify-between items-center gap-[54px]">
              <h3 className="text-[20px] font-flexoBoldIt text-blue-400">
                Valor Total do Empréstimo:
              </h3>
              <div className="w-[230px] h-[65%] bg-white rounded-[5px] flex px-[10px] justify-between items-center">
                <strong className="text-[22px] font-flexoBoldIt text-orange-400">
                  R$ 1.000,00
                </strong>
              </div>
            </div>
            <div className="w-[580px] h-[70px] bg-gray-200 rounded-[5px] flex flex-row px-[24px] justify-between items-center gap-[54px]">
              <h3 className="text-[20px] font-flexoBoldIt text-blue-400">
                Parcelas
              </h3>
              <div className="w-[230px] h-[65%] bg-white rounded-[5px] flex px-[10px] justify-between items-center">
                <strong className="text-[22px] font-flexoBoldIt text-orange-400">
                  3
                </strong>
                <div className="flex flex-col gap-1">
                  <span className="h-[15px] cursor-pointer hover:opacity-60">
                    <Image src={ArrowUpSvg} width={10} height={10} />
                  </span>
                  <span className="h-[15px] cursor-pointer hover:opacity-80 flex justify-start">
                    <Image src={ArrowDownSvg} width={10} height={10} />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[580px] h-[70px] bg-gray-200 rounded-[5px] flex flex-row px-[24px] justify-between items-center gap-[54px]">
              <h3 className="text-[20px] font-flexoBoldIt text-blue-400">
                Valor de parcela
              </h3>
              <div className="w-[230px] h-[65%] bg-white rounded-[5px] flex px-[10px] justify-between items-center">
                <strong className="text-[22px] font-flexoBoldIt text-orange-400">
                  R$ 1.000,00
                </strong>
              </div>
            </div>
          </div>
          <div className="w-full h-full px-[65px] flex flex-col gap-[30px]">
            <p className="text-[14px] font-flexoMedium text-blue-400">
              Escolha o tipo de contrato:
            </p>
            <div className="flex flex-row justify-between items-center">
              <button className="w-[200px] h-[60px] bg-blue-400 rounded-[5px] text-[24px] font-flexoBold text-white hover:opacity-80">
                Automático
              </button>
              <button className="w-[200px] h-[60px] rounded-[5px] hover:opacity-80">
                Manual
              </button>
              <button
                className="w-[580px] h-[60px] bg-blue-400 rounded-[5px] flex gap-5 justify-center items-center text-[24px] font-flexoBold text-white hover:opacity-80"
                onClick={handleDone}
              >
                {' '}
                <Image src={CheckSvg} alt="check-card" width={26} height={26} />
                Concluir
              </button>
            </div>
          </div>
          <Table />
        </main>
      </div>
    </div>
  );
}
