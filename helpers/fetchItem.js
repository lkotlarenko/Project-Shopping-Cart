const urlItem = (ItemID) => `https://api.mercadolibre.com/items/${ItemID}`;

const fetchItem = async (item) => {
  if (!item) throw new Error('You must provide an url');
  try {
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
