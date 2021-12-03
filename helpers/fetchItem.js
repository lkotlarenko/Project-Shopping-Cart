// function to get the correct api endpoint url
const urlItem = (ItemID) => `https://api.mercadolibre.com/items/${ItemID}`;

const fetchItem = async (item) => {
  // if fetchItem is called with no parameter return an error
  if (!item) throw new Error('You must provide an url');
  try {
    // fetch on api then return the result
    const data = await fetch(urlItem(item));
    const dataJson = await data.json();
    return dataJson;
  } catch (error) {
    throw new Error(error);
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
