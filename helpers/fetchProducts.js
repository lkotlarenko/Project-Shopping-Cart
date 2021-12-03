// function to get the correct api endpoint url
const url = (search) =>
  `https://api.mercadolibre.com/sites/MLB/search?q=${search}`;

const fetchProducts = async (theme) => {
  // if fetchProducts is called with no parameter return an error
  if (!theme) throw new Error('You must provide an url');
  try {
    // fetch on api then return the resulting array
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
