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

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener() {
  
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const addToCart = () => {
  // adiciona a função de adicionar ao carinho a todos os botoes dos itens da pagina
  document.querySelectorAll('.item__add').forEach((item) =>
    item.addEventListener('click', async (event) => {
      // pega os dados do item clicado atraves da função fetchItem usando como parametro
      // o inner text com o id do primeiro elemento filho do pai do botao clicado (primeiro irmao do botao)  
      const product = await fetchItem(event.target.parentNode.childNodes[0].innerText);
      // pegando as constantes para usar como parametros na funcao createCartItemElement
      const { id, title, price } = product;
      const dataItem = { sku: id, name: title, salePrice: price };
      const cartItem = createCartItemElement(dataItem);
      // adicionando o item devolvido ao carrinho de compras
      document.querySelector('.cart__items').appendChild(cartItem);
    }));
};

const syncList = (fetchList) => {
  // extrair as informações de cada item no array devolvido pela api e usar com
  // a func createProductItemElement / dar append no elemento gerado
  fetchList.forEach(({ id, title, thumbnail }) => {
    const dataItem = { sku: id, name: title, image: thumbnail };
    const item = createProductItemElement(dataItem);
    document.querySelector('.items').appendChild(item);
  });
  // chama a funcao para adicionar o event listeners aos botoes
  addToCart();
};

window.onload = async () => {
  const fetchList = await fetchProducts('computador');
  syncList(fetchList);
};
