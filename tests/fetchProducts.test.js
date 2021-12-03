require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Testing fetchProducts', () => {
  beforeEach(async () => fetchList = await fetchProducts('computador'));

  it('Test if it is a function', () => expect(typeof fetchProducts).toBe('function'));

  it('Test if "fetch" is called', () => expect(fetch).toHaveBeenCalled());

  it('Test if "fetch" is called with the correct endpoint', () => {
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('Test if returns the correct data with "computador" as parameter', () => expect(fetchList).toEqual(computadorSearch.results));

  it('Test if returns the correct error when no parameter is provided', async () => {
    try {
      await fetchProducts();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  })

  it('Extra - Test if returns with 50 items', () => expect(fetchList.length).toBe(50));
});
