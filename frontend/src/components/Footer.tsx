import Link from 'next/link';
import { useInstallments } from '@hooks/useInstallments';
import { Button } from './Buttton';
import { FooterProps } from '@shared/types';
import { currencyBRL } from 'utils/currencyBRL';

export function Footer({ value }: FooterProps) {
  const { installmentClient } = useInstallments();
  function handleAdvance() {}

  return (
    <footer className="w-full h-[86px] bg-blue-400 fixed bottom-0 flex flex-row justify-center items-center gap-[45px]">
      <p className="text-[24px] font-flexoBold text-white">
        Nome: {installmentClient.table_name}
      </p>
      <p className="text-[24px] font-flexoBold text-white">
        Parcelas: {installmentClient.installment}
      </p>
      <p className="text-[24px] font-flexoBold text-white">
        Valor da Parcela:{' '}
        {currencyBRL(
          (installmentClient.installmentValue * value) /
            installmentClient.installment
        )}
      </p>
      <Link href={'find-customer'}>
        <Button title="Avançar" onClick={handleAdvance} />
      </Link>
    </footer>
  );
}
