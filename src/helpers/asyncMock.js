import data from "../data/data.json";

export const getItems = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 20);
  });
};

export const getItemById = (itemId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = data.find((elemento) => elemento.id === itemId); //utilizo find porque busco un unico id

      if (item) {
        resolve(item);
      } else {
        reject("No existe el producto!");
      }
    }, 20);
  });
};

export const getItemByCategory = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = data.filter(
        //utilizo filter porque de no enctrar devuelve un array vacio
        (elemento) => elemento.categoria === categoryId
      );
      if (item) {
        resolve(item);
      } else {
        reject("No existe la categoría!");
      }
    }, 20);
  });
};
