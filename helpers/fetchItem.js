const urlItem = (ItemID) => `https://api.mercadolibre.com/items/${ItemID}`;

const fetchItem = async (item) => {
  if (!item) throw new Error('Parameter Missing!!!');
  try {
    // fetch na api retornando array result
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
