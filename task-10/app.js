// Get cart data from localStorage or return an empty array if none exists.
function getCart() {
    let cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }
  
  // Save the current cart to localStorage.
  function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Add a product to the cart. If it exists, increase its quantity.
  function addToCart(product) {
    let cart = getCart();
    let existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    saveCart(cart);
  }
  
  // Update the quantity of a specific cart item.
  function updateCartQuantity(id, quantity) {
    let cart = getCart();
    let item = cart.find(i => i.id === id);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== id);
      }
    }
    saveCart(cart);
  }
  
  // Remove an item from the cart.
  function removeFromCart(id) {
    let cart = getCart();
    cart = cart.filter(i => i.id !== id);
    saveCart(cart);
  }
  