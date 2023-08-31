// document.querySelector(".cart-btn-inner").addEventListener("click",function(){
//     document.querySelector(".cart-dropdown").classList.toggle("displayNone");
// })

updateCartTotal();

var removeCartItemButtons = document.getElementsByClassName("btn-danger");
for(var i = 0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i];
    button.addEventListener("click",function(){
        this.parentElement.parentElement.parentElement.remove();
        updateCartTotal();
    })
}

var addToCartButtons = document.getElementsByClassName("add-btn");
for(var i = 0; i < addToCartButtons.length; i++){
    var button = addToCartButtons[i];
    button.addEventListener("click",function(){
        var shopItem = this.parentElement.parentElement;
        var itemName = shopItem.querySelector(".shop-item-name").innerHTML;
        var itemPrice = shopItem.querySelector(".discount-price").innerHTML;
        var imgSrc = shopItem.querySelector("img").src;
        console.log(itemName + " " + itemPrice + " " + imgSrc);
    })
}

function updateCartTotal(){
    var itemPrices = document.querySelectorAll(".cart-item-price");
    var price = 0;
    for(var i = 0; i < itemPrices.length; i++){
        price += Number(itemPrices[i].innerHTML);
    }
    document.querySelector(".cart-price").innerHTML = "₹"+price;
}