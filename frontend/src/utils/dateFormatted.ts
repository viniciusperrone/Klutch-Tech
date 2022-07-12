export function dateFormatted(date?: Date): string {
  const newDate = date ? date : new Date;
  return newDate.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
}
