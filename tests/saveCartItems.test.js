const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');
const testSave = '<ol><li>Item</li></ol>';

localStorageSimulator('setItem');

describe('4 - Testing saveCartItems', () => {
  beforeEach(() => saveCartItems(testSave));

  it('Test if "setItem" is used', () => expect(localStorage.setItem).toHaveBeenCalled());

  it('Test if "setItem" is using 2 parameters', () => expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', testSave));
});
