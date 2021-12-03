// function to get the correct api endpoint url
const url = (search) => `https://api.mercadolibre.com/sites/MLB/search?q=${search}`;

const fetchProducts = async (theme) => {
  try {
    // fetch on api then return the resulting array
    const data = await fetch(url(theme));
    const dataJson = await data.json();
    return dataJson.results;
  } catch (error) {
    throw new Error(error.message);
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
