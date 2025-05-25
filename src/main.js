// Запити на бєк
import { getAllProducts } from './requests/products';
// Markup елементів
import { markupProducts } from './services/markupService';
// DOM елементи
const allProducts = document.querySelector('#allProducts');

// getAllProducts().then(console.log);
getAllProducts().then(({ data: { products } }) => {
  console.log(products); // буде наш массив

  const markupCards = markupProducts(products);
  allProducts.insertAdjacentHTML('beforeend', markupCards);
});
