export interface IInstallmentsHook extends IInstallments {
  table_name: string;
}

export interface IInstallments {
  id: number;
  installment: number;
  installmentInterest: number;
  installmentValue: number;
  fullValue: number;
  comission: number;
  table: string;
}

export interface IRateTable {
  id: string;
  installments: IInstallments[];
  name: string;
  created_at: Date;
}

export interface IRateTable {
  id: string;
  installments: IInstallments[];
  name: string;
  created_at: Date;
}

export interface Bank {
  id: string;
  label: string;
}

export interface ICustomer {
  id: string;
  bank: Bank;
  name: string;
  phone: string;
  cpf: number;
}

export interface ISolicitation {
  clientId: string;
  installmentId: number;
  rateTableId: string;
  installmentInterest: number;
  installmentInterestValue: number;
  cardName: string;
  cardNumber: string;
  expirationDate: string;
  cvc: string;
  desiredValue: number;
  totalLoan: number;
}

export interface ISolicitationResponse extends ISolicitation {
  id: string;
  customer: ICustomer | null;
  installments: IInstallments;
  table: IRateTable | null;
}
