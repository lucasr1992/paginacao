
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function GerarLista() {
  const nomes = ["Alice", "Bob", "Charlie", "David", "Eva", "Fiona", "George", "Hannah", "Isaac", "Jenny"];
  const idades = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65];
  const arrayDeObjetos = [];

  for (let i = 1; i <= 98; i++) {
    const objeto = {
      id: i,
      nome: nomes[getRandomInt(0, nomes.length - 1)],
      idade: idades[getRandomInt(0, idades.length - 1)]
    };
    arrayDeObjetos.push(objeto);
  }

  return arrayDeObjetos
}


