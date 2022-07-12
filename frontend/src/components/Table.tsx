import { useState } from 'react';
import className from 'classnames';
import { RateTableProps } from '@shared/types';
import { IInstallments } from '@shared/interfaces';
import { useInstallments } from '@hooks/useInstallments';
import { currencyBRL } from 'utils/currencyBRL';

export function Table({
  multiple = false,
  id,
  name,
  installments,
  value
}: RateTableProps) {
  const [selectedTable, setSelectedTable] = useState<boolean>(false);
  const [selectedInstallment, setSelectedInstallment] = useState<number>();
  const { setInstallmentClient } = useInstallments();

  function handleSelectInstallment(installment: IInstallments) {
    setSelectedInstallment(installment.id);
    setSelectedTable(true);

    setInstallmentClient({ table_name: name, ...installment });
  }
  return (
    <div className="mx-[16.5vw] flex flex-row">
      {multiple && (
        <div className="px-[10px] min-h-full bg-white border-[1px] rounded-l-[5px] border-gray-300 flex items-center">
          <span className="w-[25px] h-[25px] rounded-[25px] border-[1px] border-gray-900 cursor-pointer flex justify-center items-center">
            <div
              className={className('w-[15px] h-[15px] rounded-[15px]', {
                'bg-gray-900': selectedTable,
                'border-[1px] border-gray-900': !selectedTable
              })}
            />
          </span>
        </div>
      )}
      <div className="flex-1 flex">
        <div className="bg-gray-200">
          <div
            className={className('py-[15px] flex justify-center items-center', {
              'border-l border-gray-300': !multiple
            })}
          >
            <h1 className="text-[24px] font-flexoBold text-blue-400">{name}</h1>
          </div>
          <div className="flex flex-row">
            <div
              className={className('px-9 py-[14px] border-r border-gray-300', {
                'px-9': multiple,
                'border-l px-[35.75px]': !multiple
              })}
            >
              <h2 className="text-[18px] font-flexoBold text-gray-900">
                Parcela
              </h2>
            </div>
            <div className="px-9 py-[14px] border-r border-gray-300">
              <h2 className="text-[18px] font-flexoBold text-gray-900">
                Juros da Parcela
              </h2>
            </div>
            <div className="px-9 py-[14px] border-r border-gray-300">
              <h2 className="text-[18px] font-flexoBold text-gray-900">
                Valor Parcela
              </h2>
            </div>
            <div className="px-9 py-[14px] border-r border-gray-300">
              <h2 className="text-[18px] font-flexoBold text-gray-900">
                Valor Total
              </h2>
            </div>
            <div className="px-9 py-[14px]">
              <h2 className="text-[18px] font-flexoBold text-gray-900">
                Comissão Parceiro
              </h2>
            </div>
          </div>
          {installments.map(installment => (
            <span
              className={className('flex flex-row bg-white cursor-pointer', {
                'bg-orange-100':
                  installment.id === selectedInstallment && multiple
              })}
              key={installment.id}
              onClick={() => handleSelectInstallment(installment)}
            >
              <div
                className={className(
                  'w-[134px] py-[14px] flex justify-center border-b border-r border-gray-300',
                  {
                    'border-l': !multiple
                  }
                )}
              >
                <h2 className="text-[18px] font-flexoRegular text-gray-900">
                  {installment.installment}
                </h2>
              </div>
              <div className="w-[207px] py-[14px] flex justify-center border-b border-r border-gray-300">
                <h2 className="text-[18px] font-flexoRegular text-gray-900">
                  {installment.installmentInterest}%
                </h2>
              </div>
              <div className="w-[182px] py-[14px] flex justify-center border-b border-r border-gray-300">
                <h2 className="text-[18px] font-flexoRegular text-gray-900">
                  {currencyBRL(
                    (value * installment.installmentValue) /
                      installment.installment
                  )}
                </h2>
              </div>
              <div className="w-[161px] py-[14px] flex justify-center border-b border-r border-gray-300">
                <h2 className="text-[18px] font-flexoRegular text-gray-900">
                  {currencyBRL(installment.installmentValue * value)}
                </h2>
              </div>
              <div className="w-[224px] py-[14px] flex justify-center border-b border-r border-gray-300">
                <h2 className="text-[18px] font-flexoRegular text-gray-900">
                  {currencyBRL(
                    (installment.comission * value) / installment.installment
                  )}
                </h2>
              </div>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
