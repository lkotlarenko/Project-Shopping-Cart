// funcao para pegar a url da api com o parametro desejado
const url = (search) =>
  `https://api.mercadolibre.com/sites/MLB/search?q=${search}`;

const fetchProducts = async (theme) => {
  if (!theme) throw new Error('You must provide an url');
  try {
    // fetch na api retornando array result
    const data = await fetch(url(theme));
    const dataJson = await data.json();
    return dataJson.results;
  } catch (error) {
    throw new Error(error);
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
