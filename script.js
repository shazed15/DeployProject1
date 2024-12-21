function applyPromoCode() {
    // Get the entered promo code
    var promoCode = document.getElementById("promo-code").value.trim();
    
    // Get the current total price
    var totalPrice = parseFloat(document.getElementById("total-price").innerText);
    
    // Check if the entered promo code is "Ostad"
    if (promoCode === "Ostad") {
        // Apply a 10% discount
        var discount = totalPrice * 0.10;
        var discountedPrice = totalPrice - discount;
        
        // Update the total price on the page
        document.getElementById("total-price").innerText = discountedPrice.toFixed(2);
        
        alert("Promo code applied! You received a 10% discount.");
    } else {
        alert("Invalid promo code. Please try again.");
    }
}