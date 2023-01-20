const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined,{currency: 'Usd',style: 'currency'})

 export function formatCurruency(number: number){
  return CURRENCY_FORMATTER.format(number)
 }
