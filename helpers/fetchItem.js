//* This file may have parts of it written by @jeanpsv
// function to get the correct api endpoint url
const urlItem = (ItemID) => `https://api.mercadolibre.com/items/${ItemID}`;

const fetchItem = async (item) => {
  try {
    // fetch on api then return the result
    const data = await fetch(urlItem(item));
    const dataJson = await data.json();
    return dataJson;
  } catch (error) {
    throw new Error(error.message);
   }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
