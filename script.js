document.addEventListener('DOMContentLoaded', function () {
  let cartCount = 0;

  const addToCartButton = document.getElementById('addToCart');
  const viewCartButton = document.getElementById('viewCart');
  const cartCountElement = document.getElementById('cartCount');

  addToCartButton.addEventListener('click', function () {
    cartCount++;
    cartCountElement.innerText = cartCount;
  });

  viewCartButton.addEventListener('click', function () {
    alert('View Cart clicked. Implement your cart functionality here.');
    // Add logic to display the cart items and total price
  });
});
