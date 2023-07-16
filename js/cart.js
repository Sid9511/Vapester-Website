document.addEventListener('DOMContentLoaded', function() {
    // Retrieve cart data from localStorage
    var cartData = JSON.parse(localStorage.getItem('cartData')) || [];

    var cartItemsContainer = document.getElementById('cart-items');

    // Check if cartData is not empty
    if (cartData.length > 0) {
        // Generate HTML for each item in cartData
        var cartHTML = '';

        cartData.forEach(function(item) {
            cartHTML += '<div class="cart-item">' + item + '</div>';
        });

        // Insert the generated HTML into the cartItemsContainer
        cartItemsContainer.innerHTML = cartHTML;
    } else {
        cartItemsContainer.innerHTML = '<p style="font-size: 26px;">No items in the cart, Go Shopping!!!</p>';
    }

    var clearCartButton = document.getElementById('clear-cart');

    clearCartButton.addEventListener('click', function() {
        // Clear the cart by removing the cart data from localStorage
        localStorage.removeItem('cartData');

        // Clear the cart items displayed on the page
        cartItemsContainer.innerHTML = '<p style="font-size: 26px;">No items in the cart, Go Shopping!!!</p>';

        alert('Cart cleared!');
    });
});

window.addEventListener('message', function(event) {
    if (event.data && event.data.cartData) {
      cartData = event.data.cartData;
      renderCartItems();
    }
});



function redirectToPackages() {
  var selectedOption = localStorage.getItem('selectedValue');

  if (selectedOption === "yes") {
      window.location.href = "smoker.html";
  } else if (selectedOption === "no") {
      window.location.href = "nonsmoker.html";
  } else {
      alert("Invalid option selected!");
  }
}






document.getElementById("payment-btn-cart").addEventListener("click", function() {
    window.location.href = "registration.html";
});

