// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/
import data from './data/got/got.js';

let filtrarDatos = data.got.filter(family => family == "House Targaryen");
console.log(filtrarDatos);

