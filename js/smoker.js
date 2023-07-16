/*Smoker Webpage*/
function addToCart(packageDetails) {
    // Retrieve existing cart data from localStorage or initialize an empty array
    var cartData = JSON.parse(localStorage.getItem('cartData')) || [];

    // Add the package details to the cart
    cartData.push(packageDetails);

    // Store the updated cart data in localStorage
    localStorage.setItem('cartData', JSON.stringify(cartData));

    // Display a confirmation message or perform any additional actions
    alert('Package added to cart!');
}

function redirectToCart() {
    // Implement the redirection logic to the cart.html page
    window.location.href = "cart.html";
}
  
/*cart item count*/
document.addEventListener('DOMContentLoaded', function() {
    var cartIcon = document.getElementById('cart-icon');
  
    function updateCartItemCount() {
      var cartData = JSON.parse(localStorage.getItem('cartData')) || [];
      var cartItemCount = cartData.length;
      cartIcon.setAttribute('data-count', cartItemCount);
    }
  
    // Update cart item count when the page loads
    updateCartItemCount();
  
    // Listen for changes in the cart data and update the cart item count accordingly
    window.addEventListener('storage', function(event) {
      if (event.key === 'cartData') {
        updateCartItemCount();
      }
    });
});

function redirectToNextPage(nextPage) {
  // Redirect to the specified URL
  if (nextPage) {
      window.location.href = nextPage;
  }
}
  
// scroll up
let prevScrollPos = window.pageYOffset;
const header = document.getElementById("smoker-header");

window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up, show the header
    header.classList.remove("hidden");
  } else {
    // Scrolling down, hide the header
    header.classList.add("hidden");
  }

  prevScrollPos = currentScrollPos;
});




