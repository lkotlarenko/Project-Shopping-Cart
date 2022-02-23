//* This file may have parts of it written by @jeanpsv
const saveCartItems = (cart) => localStorage.setItem('cartItems', cart);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
