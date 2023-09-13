  function incrementQuantity(chocolateId) {
    var quantityInput = document.getElementById(chocolateId);
    var currentQuantity = parseInt(quantityInput.value);
    
    if (currentQuantity < 8) {
      quantityInput.value = currentQuantity + 1;
      calculateTotalPrice();
    }
  }
  
  function decrementQuantity(chocolateId) {
    var quantityInput = document.getElementById(chocolateId);
    var currentQuantity = parseInt(quantityInput.value);
    
    if (currentQuantity > 0) {
      quantityInput.value = currentQuantity - 1;
      calculateTotalPrice();
    }
  }
  
  function calculateTotalPrice() {
    var chocolate1Qty = parseInt(document.getElementById("chocolate1").value);
    var chocolate2Qty = parseInt(document.getElementById("chocolate2").value);
    var chocolate3Qty = parseInt(document.getElementById("chocolate3").value);
    
    var totalPrice = (chocolate1Qty * 245) + (chocolate2Qty * 325) + (chocolate3Qty * 499);
    
    document.getElementById("totalPrice").textContent = totalPrice;
  }
  