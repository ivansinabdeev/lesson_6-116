// Task 1
export const markupProducts = products => {
  return products
    .map(
      ({ brand, description, category, id, images, price, stock, title }) => {
        return ` <li data-id="${id}">
      <img src="${images[0]}" alt="${title}" width="250" />
      <h2>Brand: ${brand}</h2>
      <h3>Title: ${title}</h3>
      <p>Category: ${category}</p>
      <p>Description: ${description}</p>
      <p>Price: ${price}</p>
      <p>In stock: ${stock}</p>
    </li>`;
      }
    )
    .join('');
};
