require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  beforeEach(async () => fetchList = await fetchProducts('computador'));

  it('Testa se a função existe', () => expect(fetchProducts).toBeDefined());

  it('Testa se a função retorna uma lista contendo 50 produtos', () => expect(fetchList.length).toBe(50));

  it('Testa se a função retorna um erro quando nenhum parametro é passado', async () => {
    try {
      await fetchProducts();
    } catch (error) {
      expect(error).toEqual(new Error('No parameter!!!'));
    }
  })

  it('Testa se a função retorna corretamente com parametro "computador"', () => expect(fetchList).toEqual(computadorSearch.results));

});
