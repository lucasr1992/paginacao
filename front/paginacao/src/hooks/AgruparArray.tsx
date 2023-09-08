export default function AgruparObj(array: any[], Qnt: number) {
  const grupos: any[][] = [];
  for (let i = 0; i < array.length; i += Qnt) {
    grupos.push(array.slice(i, i + Qnt));
  }
  
  return grupos;
}