import { Button } from './Buttton';

export function Footer() {
  return (
    <footer className="w-full h-[86px] bg-blue-400 fixed bottom-0 flex flex-row justify-center items-center gap-[45px]">
      <p className="text-[24px] font-flexoBold text-white">
        Nome: Tabela Padrão
      </p>
      <p className="text-[24px] font-flexoBold text-white">Parcelas: 2</p>
      <p className="text-[24px] font-flexoBold text-white">
        Valor da Parcela: R$1.115,00
      </p>
      <Button title="Avançar" />
    </footer>
  );
}
