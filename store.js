var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    })
}

function updateCartTotal () {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    for (var i = 0; i < cartRows.length; i++) {
        var cartRows =cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
}