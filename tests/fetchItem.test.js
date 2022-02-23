//* This file may have parts of it written by @jeanpsv
require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Testing fetchItem', () => {
  beforeEach(async () => fetchResult = await fetchItem('MLB1615760527'));

  it('Test if it is a function', () => expect(typeof fetchItem).toBe('function'));

  it('Test if "fetch" is called', () => expect(fetch).toHaveBeenCalled());

  it('Test if "fetch" is called with the correct endpoint', () => {
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  it('Test if returns the correct data with "MLB1615760527" as parameter', () => expect(fetchResult).toEqual(item));

  it('Test if returns the correct error when no parameter is provided', async () => {
    try {
      await fetchItem();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  })
});
