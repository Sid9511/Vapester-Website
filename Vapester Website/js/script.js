/*Smoker Questionnaire*/

const optionBoxes = document.querySelectorAll('.option-box');

function handleOptionSelection() {
  optionBoxes.forEach(box => {
    box.classList.remove('selected');
  });

  this.classList.add('selected');
}

optionBoxes.forEach(box => {
  box.addEventListener('click', handleOptionSelection);
});


var selectedValue = localStorage.getItem("selectedValue");
if (selectedValue) {
    document.querySelector(`input[name="smoker"][value="${selectedValue}"]`).checked = true;
}



function validateForm() {
  const nameInput = document.querySelector('.name-input');

  if (!nameInput.value.trim()) {
    alert("Please fill in your name.");
  } else {
    storeSelectedOption(),
    redirectToNextPage();
  }
}



function redirectToNextPage() {
  // Your code to redirect to the next page goes here
  console.log("Redirecting to the next page...");
}


function redirectToNextPage() {
    var smokerOption = document.querySelector('input[name="smoker"]:checked');
    
    if (smokerOption !== null) {
        if (smokerOption.value === "yes") {
            localStorage.setItem("selectedValue", "yes");
            window.location.href = "smoker.html";
        } else if (smokerOption.value === "no") {
            localStorage.setItem("selectedValue", "no");
            window.location.href = "nonsmoker.html";
        }
    } else {
        alert("Please select an option.");
    }
}

function storeSelectedOption() {
  var selectedOption = document.querySelector('input[name="smoker"]:checked').value;
  localStorage.setItem('selectedValue', selectedOption);
}


function redirectToCart() {
  window.location.href = 'cart.html';
}