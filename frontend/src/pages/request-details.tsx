import Image from 'next/image';

import { useValue } from '@hooks/useValue';
import { useStorage } from '@hooks/useStorage';
import { useRequest } from '@hooks/useRequest';
import { Header } from '@components/Header';
import { currencyBRL } from 'utils/currencyBRL';

import FillingSvg from 'assets/icons/filling-orange.svg';
import PlusSvg from 'assets/icons/plus.svg';
import CardSvg from 'assets/icons/card.svg';
import AlertSvg from 'assets/icons/alert.svg';
import CheckCircleSvg from 'assets/icons/checkmark-circle.svg';
import DocumentSvg from 'assets/icons/document.svg';
import { dateFormatted } from 'utils/dateFormatted';

export default function RequestDetails() {
  const { value } = useValue();
  const { request } = useRequest();
  const { storage } = useStorage();

  return (
    <div>
      <Header />
      <div className="flex-1 py-[30px]">
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

        <main className="max-w-[800px] mx-auto mt-[70px] flex-1 flex flex-row justify-between">
          <div className="w-[380px] flex flex-col gap-[12px]">
            <div className="max-w-[380px] h-[50px] bg-gray-200 rounded-[5px] flex justify-center items-center">
              <h2 className="text-[18px] font-flexoMedium text-gray-900">
                Solicitação gerada por{' '}
                <strong className="text-[18px] font-flexoBold text-blue-400">
                  Sistema Credfica
                </strong>
              </h2>
            </div>

            <div className="max-w-[380px] max-h-[774px] flex-1 flex flex-row flex-wrap justify-between content-center gap-[12px]">
              <div className="w-[180px] h-[250px] bg-gray-200 rounded flex flex-col py-6 items-center gap-[52px]">
                <h1 className="text-[20px] font-flexoMedium">Valor Total</h1>
                <strong className="text-[22px] font-flexoBold text-green-700">
                  {currencyBRL(request.installments.installmentValue * value)}
                </strong>
              </div>
              <div className="w-[180px] h-[250px] bg-gray-200 rounded flex flex-col py-6 items-center gap-[52px]">
                <h1 className="text-[20px] font-flexoMedium">
                  Valor a depositar
                </h1>
                <strong className="text-[22px] font-flexoBold text-green-700">
                  {currencyBRL(
                    (request.installments.installmentValue * value) /
                      request.installments.installment
                  )}
                </strong>
              </div>
              <div className="w-[180px] h-[250px] bg-gray-200 rounded flex flex-col py-4 justify-between items-center">
                <h1 className="text-[18px] font-flexoMedium">
                  Frente do cartão
                </h1>
                <Image
                  src={DocumentSvg}
                  alt="docuemnt"
                  width={100}
                  height={70}
                />
                <a
                  className="text-[14px] font-flexRegular text-blue-500 underline"
                  href={storage.front}
                  download
                  target="_blank"
                >
                  Ver comprovante
                </a>
              </div>
              <div className="w-[180px] h-[250px] bg-gray-200 rounded flex flex-col py-4 justify-between items-center">
                <h1 className="text-[18px] font-flexoMedium">
                  Verso do cartão
                </h1>
                <Image
                  src={DocumentSvg}
                  alt="docuemnt"
                  width={100}
                  height={70}
                />
                <a
                  className="text-[14px] font-flexRegular text-blue-500 underline"
                  href={storage.towards}
                  download
                  target="_blank"
                >
                  Ver comprovante
                </a>
              </div>
              <div className="w-[180px] h-[250px] bg-gray-200 rounded flex flex-col py-4 justify-between items-center">
                <h1 className="text-[18px] font-flexoMedium">
                  Selfie com cartão
                </h1>
                <Image
                  src={DocumentSvg}
                  alt="document"
                  width={100}
                  height={70}
                />
                <a
                  className="text-[14px] font-flexRegular text-blue-500 underline"
                  href={storage.selfie}
                  download
                  target="_blank"
                >
                  Ver comprovante
                </a>
              </div>
            </div>
          </div>
          <div className="w-[380px] flex flex-col gap-[12px] justify-end">
            <div className="px-[20px] max-w-[380px] h-[50px] bg-gray-200 rounded-[5px] flex items-center">
              <h2 className="text-[18px] font-flexoMedium text-gray-900">
                Fluxo da Solicitação:{' '}
                <strong className="text-[18px] font-flexoBold text-blue-400">
                  Manual
                </strong>
              </h2>
            </div>

            <div className="max-w-[380px] pb-[20px] bg-gray-200 rounded-[5px] flex flex-col justify-center">
              <header className="px-[20px] py-[22px]">
                <h1>Modalidade:</h1>
              </header>
              <main className="flex-1 flex flex-col px-[20px] items-center gap-4">
                <div className="flex flex-row justify-center items-center gap-[24px]">
                  <h1 className="text-[18px] font-flexoBoldIt">
                    Cartão de Crédito
                  </h1>
                  <Image src={CardSvg} alt="card" width={40} height={25} />
                </div>
                <h1 className="text-[16px] font-flexoBoldIt">
                  Número do cartão: {request.cardNumber}
                </h1>
                <div className="flex flex-row justify-center items-center gap-[30px]">
                  <h1 className="text-[16px] font-flexoBoldIt">
                    Validade: {request.expirationDate.slice(3)}
                  </h1>
                  <h1 className="text-[16px] font-flexoBoldIt">
                    CVC: {request.cvc}
                  </h1>
                </div>
                <h1 className="text-[16px] font-flexoBoldIt">
                  {request.installments.installment} parcelas de:{' '}
                  <strong className="text-[16px] font-flexoBoldIt text-green-700">
                    {currencyBRL(
                      (request.installments.installmentValue * value) /
                        request.installments.installment
                    )}
                  </strong>
                </h1>
                <h1 className="text-[16px] font-flexoBoldIt">
                  Tabela: {request.table.name}
                </h1>
              </main>
            </div>

            <div className="max-w-[380px] pb-[20px] bg-gray-200 rounded-[5px] flex flex-col justify-center">
              <header className="px-[20px] py-[22px]">
                <h1>Informações do Cliente:</h1>
              </header>
              <main className="flex-1 flex flex-col px-[20px] gap-4">
                <h1 className="text-[16px] font-flexoBoldIt">
                  Nome: {request.customer.name}
                </h1>
                <h1 className="text-[16px] font-flexoBoldIt">
                  CPF: {request.customer.cpf}
                </h1>
                <h1 className="text-[16px] font-flexoBoldIt">Agência: 1235</h1>
                <h1 className="text-[16px] font-flexoBoldIt">
                  Banco: {request.customer.bank.label}
                </h1>
                <h1 className="text-[16px] font-flexoBoldIt">
                  Tipo de Conta: Poupança
                </h1>
                <h1 className="text-[16px] font-flexoBoldIt">
                  Número da conta: {request.cardNumber}
                </h1>
              </main>
            </div>

            <div className="max-w-[380px] pb-[20px] bg-blue-100 border-2 border-blue-400 border-dashed rounded-[5px] flex flex-col justify-center">
              <header className="px-[20px] py-[22px]">
                <h1>Informações Gerais:</h1>
              </header>
              <main className="flex-1 flex flex-col px-[20px] gap-4">
                <div className="max-w-full flex justify-center items-center">
                  <h1 className="text-[18px] font-flexoBoldIt">
                    Data: {dateFormatted()}
                  </h1>
                </div>
                <div className="flex flex-row flex-wrap justify-center gap-6">
                  <div className="w-[280px] h-[40px] bg-orange-400 rounded-[5px] flex flex-row justify-center items-center gap-1">
                    <Image
                      src={AlertSvg}
                      alt="warning"
                      width={20}
                      height={20}
                    />
                    <h3 className="text-[18px] font-flexoBold text-white">
                      Aguardando
                    </h3>
                  </div>
                  <div className="w-[150px] h-[40px] bg-blue-400 rounded-[5px] flex flex-row justify-center items-center gap-1">
                    <Image
                      src={CheckCircleSvg}
                      alt="approved"
                      width={20}
                      height={20}
                    />
                    <h3 className="text-[18px] font-flexoBold text-white">
                      Pré Aprovar
                    </h3>
                  </div>
                  <div className="w-[150px] h-[40px] bg-orange-400 rounded-[5px] flex flex-row justify-center items-center gap-1">
                    <Image
                      src={AlertSvg}
                      alt="warning"
                      width={20}
                      height={20}
                    />
                    <h3 className="text-[18px] font-flexoBold text-white">
                      Reprovar
                    </h3>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
