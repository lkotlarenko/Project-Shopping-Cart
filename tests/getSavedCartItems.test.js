const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Testing getSavedCartItems', () => {
  beforeEach(() => getSavedCartItems());

  it('Test if "getItem" is used', () => expect(localStorage.getItem).toHaveBeenCalled());

  it('Test if "getItem" uses "cartItems"', () => expect(localStorage.getItem).toHaveBeenCalledWith('cartItems'));
});
