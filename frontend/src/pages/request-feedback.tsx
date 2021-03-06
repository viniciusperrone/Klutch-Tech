import { useRouter } from "next/router";
import Image from "next/image";
import { GoCheck } from "react-icons/go";

import { Header } from "@components/Header";
import { useRequest } from "@hooks/useRequest";
import { useValue } from "@hooks/useValue";
import { currencyBRL } from "utils/currencyBRL";

import FillingSvg from "assets/icons/filling-orange.svg";
import PlusSvg from "assets/icons/plus.svg";
import CardSvg from "assets/icons/card.svg";

export default function RequestFeedback() {
  const router = useRouter();
  const { request } = useRequest();
  const { value } = useValue();

  function handleRequestDetails() {
    router.push("request-details");
  }

  if (!request || !value) {
    return (
      <div className="w-[100vw] h-[100vh] flex flex-col gap-[200px]">
        <Header />
        <div className="flex justify-center items-center">
          <h1 className="text-[28px] font-flexoMedium">Sem acesso</h1>
        </div>
      </div>
    );
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

        <main className="px-[80px] py-[60px] flex flex-col items-center gap-[25px]">
          <strong className="text-[26px] font-flexoBold text-blue-400">
            Solicitação Realizada com Sucesso!
          </strong>
          <h3 className="self-start text-[18px] font-flexoRegular text-blue-400">
            Resumo de solicitação
          </h3>
          <div className="flex flex-row flex-wrap justify-center gap-[20px]">
            <div className="w-[560px] h-[60px] bg-green-100 rounded-[5px] flex flex-row px-[38px] justify-between items-center">
              <h3 className="text-[16px] font-flexoBoldIt text-gray-900">
                {request.customer.name}
              </h3>
              <div className="flex flex-row items-center gap-[30px]">
                <p className="text-[16px] font-flexoBoldIt text-gray-900">
                  {request.customer.phone}
                </p>
                <GoCheck size={32} color="#228A95" />
              </div>
            </div>
            <div className="w-[560px] h-[60px] bg-green-100 rounded-[5px] flex flex-row px-[38px] justify-between items-center">
              <h3 className="text-[16px] font-flexoBoldIt text-blue-400">
                Taxa de Juros
              </h3>
              <div className="flex flex-row items-center gap-[10px]">
                <p className="text-[18px] font-flexoBlack text-orange-400">
                  {request.installments.installmentInterest}%
                </p>
                <GoCheck size={32} color="#156b74" />
              </div>
            </div>
            <div className="w-[560px] h-[60px] bg-green-100 rounded-[5px] flex flex-row px-[38px] justify-between items-center">
              <div className="flex flex-row items-center gap-[60px]">
                <Image src={CardSvg} width={45} height={40} />
                <h3 className="ml-[-20px] text-[16px] font-flexoBoldIt text-gray-900">
                  {request.cvc}
                </h3>
                <h3 className="text-[16px] font-flexoBold text-black">VISA</h3>
                <h3 className="text-[16px] font-flexoBoldIt text-gray-900">
                  {request.cardNumber}
                </h3>
              </div>
              <div className="flex flex-row items-center gap-[30px]">
                <GoCheck size={32} color="#228A95" />
              </div>
            </div>
            <div className="w-[560px] h-[60px] bg-green-100 rounded-[5px] flex flex-row px-[38px] justify-between items-center">
              <h3 className="text-[16px] font-flexoBoldIt text-blue-600">
                Parcelas:
              </h3>
              <div className="flex flex-row items-center gap-[10px]">
                <p className="text-[24px] font-flexoBoldIt text-orange-400">
                  {request.installments.installment}
                </p>
                <GoCheck size={32} color="#228A95" />
              </div>
            </div>
            <div className="w-[560px] h-[60px] bg-green-100 rounded-[5px] flex flex-row px-[38px] justify-between items-center">
              <h3 className="text-[16px] font-flexoBoldIt text-blue-600">
                Valor desejado:
              </h3>
              <div className="flex flex-row items-center gap-[10px]">
                <p className="text-[22px] font-flexoBoldIt text-green-700">
                  {currencyBRL(value)}
                </p>
                <GoCheck size={32} color="#228A95" />
              </div>
            </div>
            <div className="w-[560px] h-[60px] bg-green-100 rounded-[5px] flex flex-row px-[38px] justify-between items-center">
              <h3 className="text-[16px] font-flexoBoldIt text-blue-400">
                Valor de Parcela
              </h3>
              <div className="flex flex-row items-center gap-[10px]">
                <p className="text-[22px] font-flexoBoldIt text-green-700">
                  {currencyBRL(
                    (request.installments.installmentValue * value) /
                      request.installments.installment
                  )}
                </p>
                <GoCheck size={32} color="#228A95" />
              </div>
            </div>
            <div className="w-[560px] h-[60px] bg-green-100 rounded-[5px] flex flex-row px-[38px] justify-between items-center">
              <h3 className="text-[16px] font-flexoBoldIt text-blue-400">
                Valor Total do Empréstimo:
              </h3>
              <div className="flex flex-row items-center gap-[10px]">
                <p className="text-[22px] font-flexoBoldIt text-green-700">
                  {currencyBRL(request.installments.installmentValue * value)}
                </p>
                <GoCheck size={32} color="#228A95" />
              </div>
            </div>
          </div>
          <button
            className="w-[400px] h-[70px] bg-blue-400 rounded-[5px] text-[24px] font-flexoBold text-white hover:opacity-80"
            onClick={handleRequestDetails}
          >
            Detalhe de solicitação
          </button>
          <p className="text-[16px] font-flexoRegular text-blue-400">
            O CredFica avaliará a solicitação
          </p>
        </main>
      </div>
    </div>
  );
}
