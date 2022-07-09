import Image from 'next/image';
import { Header } from '../components/Header';

import FillingSvg from '../assets/icons/filling-orange.svg';
import PlusSvg from '../assets/icons/plus.svg';
import VisaLogo from '../assets/images/visa.png';

export default function EnterCardData() {
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
        <form className="flex-1 py-[50px] flex flex-col justify-center items-center">
          <main className="py-[50px] flex flex-row gap-[60px]">
            <div className="flex flex-col items-center gap-7">
              <h1 className="text-[14px] font-flexoRegular text-blue-400">
                Insira os dados do Cartão:
              </h1>
              <input
                className="w-[300px] h-[45px] bg-gray-200 rounded-[5px] px-[20px] text-[14px] font-flexoBoldIt"
                type="text"
                placeholder="Nome do Cartão"
              />
              <div className="w-[300px] h-[45px] bg-gray-200 rounded-[5px] pr-[5px] flex flex-row justify-between">
                <input
                  className="w-[80%] h-full bg-gray-200 rounded-l-[5px] px-[20px] text-[14px] font-flexoBoldIt"
                  type="text"
                  placeholder="000000000000"
                />
                <Image src={VisaLogo} alt="Card" width={40} height={40} />
              </div>
              <input
                className="w-[300px] h-[45px] bg-gray-200 rounded-[5px] px-[20px] text-[14px] font-flexoBoldIt"
                type="text"
                placeholder="Data de Validade"
              />
              <input
                className="w-[300px] h-[45px] bg-gray-200 rounded-[5px] px-[20px] text-[14px] font-flexoBoldIt"
                type="text"
                placeholder="CVC"
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
          <button className="w-[300px] h-[60px] bg-blue-400 rounded-[5px] text-[26px] font-flexoBold text-white hover:opacity-80 transition">
            {' '}
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
}
