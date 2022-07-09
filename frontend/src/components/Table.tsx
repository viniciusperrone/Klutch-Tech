import { useState } from 'react';
import className from 'classnames';

type TableProps = {
  multiple?: boolean;
};

export function Table({ multiple = false }: TableProps) {
  const [selectedTable, setSelectedTable] = useState<boolean>(false);

  return (
    <div className="mx-[16.5vw] flex flex-row">
      {multiple && (
        <div className="px-[10px] min-h-full bg-white border-[1px] rounded-l-[5px] border-gray-300 flex items-center">
          <span
            className="w-[25px] h-[25px] rounded-[25px] border-[1px] border-gray-900 cursor-pointer flex justify-center items-center"
            onClick={() => setSelectedTable(!selectedTable)}
          >
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
        <header className="bg-gray-200">
          <div
            className={className('py-[15px] flex justify-center items-center', {
              'border-l border-gray-300': !multiple
            })}
          >
            <h1 className="text-[24px] font-flexoBold text-blue-400">
              Tabela Padrão
            </h1>
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
          <div className="flex flex-row bg-white">
            <div
              className={className(
                'w-[134px] py-[14px] flex justify-center border-b border-r border-gray-300',
                {
                  'border-l': !multiple
                }
              )}
            >
              <h2 className="text-[18px] font-flexoRegular text-gray-900">1</h2>
            </div>
            <div className="w-[207px] py-[14px] flex justify-center border-b border-r border-gray-300">
              <h2 className="text-[18px] font-flexoRegular text-gray-900">
                15%
              </h2>
            </div>
            <div className="w-[182px] py-[14px] flex justify-center border-b border-r border-gray-300">
              <h2 className="text-[18px] font-flexoRegular text-gray-900">1</h2>
            </div>
            <div className="w-[161px] py-[14px] flex justify-center border-b border-r border-gray-300">
              <h2 className="text-[18px] font-flexoRegular text-gray-900">1</h2>
            </div>
            <div className="w-[224px] py-[14px] flex justify-center border-b border-r border-gray-300">
              <h2 className="text-[18px] font-flexoRegular text-gray-900">1</h2>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
