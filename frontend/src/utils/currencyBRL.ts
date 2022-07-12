export function currencyBRL(money: number): string {
  const value = money.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });

  return value;
}
