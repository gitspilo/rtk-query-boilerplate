import { upperFirst } from 'lodash';

export const shortLabel = (string: string) => {
  const label = string
    .split(' ')
    .map((word) => upperFirst(word[0]))
    .join('');

  return label;
};

export const converteParaSexagesimal = (decimal: any) => {
  const apenasDecimal = parseFloat(`0.${decimal.split('.')[1]}`);
  const primeroPasso = (apenasDecimal * 60).toString();
  const segundoPasso = parseFloat(`0.${primeroPasso.split('.')[1]}`);

  const graus = decimal.split('.')[0];
  const minutos = primeroPasso.split('.')[0];
  const segundos: any = segundoPasso * 60;

  let resultado = `${graus}° `;
  resultado += `${minutos}´ `;
  resultado += `${parseFloat(segundos).toFixed(2)}"`;

  return resultado;
};

export const latlngToDms = (decimais: any) => {
  let resultado = '';
  if (decimais) {
    const primeiroValor = decimais.split(',')[0];
    const primeiroValorConvertido = converteParaSexagesimal(primeiroValor);

    const primeiroResultado = primeiroValorConvertido.replace('-', '');

    const segundoValor = decimais.split(',')[1];
    const segundoValorConvertido = converteParaSexagesimal(segundoValor);
    const segundoResultado = segundoValorConvertido.replace('-', '');
    const lat = primeiroValor > 0 ? `N ${primeiroResultado} ` : `S ${primeiroResultado} `;
    const lng = primeiroValor > 0 ? `  E ${segundoResultado}` : `  W ${segundoResultado}`;

    resultado = `${lat} ${lng}`;
  }

  return resultado;
};
