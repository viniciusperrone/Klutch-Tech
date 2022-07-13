import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { useRequest } from "@hooks/useRequest";
import { Table } from "@components/Table";
import { Header } from "@components/Header";

import FillingSvg from "assets/icons/filling-orange.svg";
import PlusSvg from "assets/icons/plus.svg";
import ArrowUpSvg from "assets/icons/arrow-up.svg";
import ArrowDownSvg from "assets/icons/arrow-down.svg";
import CheckSvg from "assets/icons/check.svg";
import { useValue } from "@hooks/useValue";
import { currencyBRL } from "utils/currencyBRL";

export default function ApplyForLoan() {
  const router = useRouter();
  const { request } = useRequest();
  const { value } = useValue();

  function handleDone() {
    router.push("request-feedback");
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

  const newInstallment =
    request.table &&
    request.table.installments.filter(
      (installment) =>
        installment.installment <= request.installments.installment
    );

  useEffect(() => {
    if (!request || !value) {
      router.back();
      return;
    }
  }, []);
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
                {request.table.name}
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
                  {currencyBRL(request.desiredValue)}
                </strong>
              </div>
            </div>
            <div className="w-[580px] h-[70px] bg-green-100 rounded-[5px] flex flex-row px-[24px] justify-between items-center gap-[54px]">
              <h3 className="text-[20px] font-flexoBoldIt text-blue-400">
                Valor Total do Empréstimo:
              </h3>
              <div className="w-[230px] h-[65%] bg-white rounded-[5px] flex px-[10px] justify-between items-center">
                <strong className="text-[22px] font-flexoBoldIt text-orange-400">
                  {currencyBRL(request.installments.installmentValue * value)}
                </strong>
              </div>
            </div>
            <div className="w-[580px] h-[70px] bg-gray-200 rounded-[5px] flex flex-row px-[24px] justify-between items-center gap-[54px]">
              <h3 className="text-[20px] font-flexoBoldIt text-blue-400">
                Parcelas
              </h3>
              <div className="w-[230px] h-[65%] bg-white rounded-[5px] flex px-[10px] justify-between items-center">
                <strong className="text-[22px] font-flexoBoldIt text-orange-400">
                  {request.installments.installment}
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
                  {currencyBRL(
                    (request.installments.installmentValue * value) /
                      request.installments.installment
                  )}
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
              <button className="w-[200px] h-[60px] rounded-[5px] text-[24px] font-flexoBold text-blue-400 hover:opacity-80">
                Manual
              </button>
              <button
                className="w-[580px] h-[60px] bg-blue-400 rounded-[5px] flex gap-5 justify-center items-center text-[24px] font-flexoBold text-white hover:opacity-80"
                onClick={handleDone}
              >
                {" "}
                <Image src={CheckSvg} alt="check-card" width={26} height={26} />
                Concluir
              </button>
            </div>
          </div>
          <Table
            id={request.table.id}
            name={request.table.name}
            installments={newInstallment}
            value={value}
          />
        </main>
      </div>
    </div>
  );
}
