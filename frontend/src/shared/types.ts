import { IInstallments } from './interfaces';

export type RateTableProps = {
  id: string;
  name: string;
  installments: IInstallments[];
  multiple?: boolean;
  value: number;
};

export type FooterProps = {
  value: number;
};
