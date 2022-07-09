export function Table() {
  return (
    <div className="mx-[16.5vw] flex flex-row">
      <div className="w-[5%] min-h-full bg-white border-[1px] border-gray-300 rounded-l-[5px]" />
      <div className="flex-1 flex">
        <header className="bg-gray-200">
          <div className="py-[15px] flex justify-center items-center">
            <h1 className="text-[24px] font-flexoBold text-blue-400">
              Tabela Padrão
            </h1>
          </div>
          <div className="flex flex-row">
            <div className="px-9 py-[14px] border-r border-gray-300">
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
            <div className="w-[134px] py-[14px] flex justify-center border-b border-r border-gray-300">
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
