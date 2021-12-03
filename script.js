const actualCart = document.querySelector('.cart__items');
// function to save current cart
const syncCart = () => saveCartItems(actualCart.innerHTML);

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
}

const cartItemClickListener = (event) => {
  event.target.remove();
  syncCart();
};

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const btnAddToCart = () => {
  // add function "add to cart" to all items buttons
  document.querySelectorAll('.item__add').forEach((item) =>
    item.addEventListener('click', async (event) => {
      // gets data from item using fetchItem(inner text with id from first sibling of clicked button)
      const product = await fetchItem(event.target.parentNode.childNodes[0].innerText);
      // deconstructing result of fetchItem to use as parameters on function 'createCartItemElement'
      const { id, title, price } = product;
      const dataItem = { sku: id, name: title, salePrice: price };
      const cartItem = createCartItemElement(dataItem);
      // adding the returned item to shopping cart
      document.querySelector('.cart__items').appendChild(cartItem);
      // save current cart to local storage
      await syncCart();
    }));
};

const syncList = (fetchList) => {
  // extracting info of each item on returned array of 'fetchProducts'
  // to use on function 'createProductItemElement' then append it to .items
  fetchList.forEach(({ id, title, thumbnail }) => {
    const dataItem = { sku: id, name: title, image: thumbnail };
    const item = createProductItemElement(dataItem);
    document.querySelector('.items').appendChild(item);
  });
  // calling function to add event listeners to all 'cart buttons'
  btnAddToCart();
};

// function to sync storage cart
const syncStorage = () => {
  actualCart.innerHTML = getSavedCartItems();
  // re-adds event listeners to cart items
  document.querySelectorAll('.cart__item').forEach((item) => {
    item.addEventListener('click', cartItemClickListener);
  });
};

window.onload = async () => {
  const fetchList = await fetchProducts('computador');
  syncList(fetchList);
  syncStorage();
};
