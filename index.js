// toggle cart dropdown
document.querySelector(".cart-btn-inner").addEventListener("click",function(){
    document.querySelector(".cart-dropdown").classList.toggle("displayNone");
})

updateCartTotal();
removeBtnEventListener();
numberOfitems();

// cart items function
function numberOfitems(){
    var shoppingCart = document.querySelector(".shopping-cart");
    var numOfItems = shoppingCart.querySelectorAll(".cart-item-name").length;
    if(numOfItems > 0){
        document.querySelector(".cart-bell-icon").classList.remove("hidden")
    }else{
        document.querySelector(".cart-bell-icon").classList.add("hidden");
    }
    document.querySelector(".cart-bell-icon").innerHTML = numOfItems;
}

// function to add remove functionality to remove buttons
function removeBtnEventListener(){
    var removeCartItemButtons = document.getElementsByClassName("btn-danger");
    for(var i = 0; i < removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i];
        button.addEventListener("click",function(){
        this.parentElement.parentElement.parentElement.remove();
        updateCartTotal();
        numberOfitems()
    })
}
}

// to add "add to cart" functionality to add buttons 
var addToCartButtons = document.getElementsByClassName("add-btn");
for(var i = 0; i < addToCartButtons.length; i++){
    var button = addToCartButtons[i];
    button.addEventListener("click",function(){
        var shopItem = this.parentElement.parentElement;
        var itemName = shopItem.querySelector(".shop-item-name").innerHTML;
        var itemPrice = shopItem.querySelector(".discount-price").innerHTML;
        var imgSrc = shopItem.querySelector("img").src;
        // console.log(itemName + " " + itemPrice + " " + imgSrc);
        addItemToCart(itemName, itemPrice, imgSrc);
        removeBtnEventListener();
        updateCartTotal();
        numberOfitems();
    })
}

// to add items into the shooping cart
function addItemToCart(name, price, imageSrc){
    var cartRow = document.createElement("div");
    cartRow.classList.add("container-fluid");

    cartRow.innerHTML = `
        <div class="row align-items-center">
            <div class="col cart-item-image">
                <img src="${imageSrc}" alt="">
            </div>
            <div class="col">
                 <div class="row">
                    <div class="col cart-item-name">
                        ${name}
                    </div>
                  </div>
                  <div class="row">
                        <div class="col">
                            ₹
                            <span class="cart-item-price">${price}</span>
                        </div>
                    </div>
            </div>
            <div class="col">
                 <button class="btn btn-sm btn-danger">remove</button>
            </div>
        </div>
    `

    var shoppingCart = document.querySelector(".shopping-cart");
    shoppingCart.append(cartRow);
    
}

// to calculate total price of shopping cart
function updateCartTotal(){
    var itemPrices = document.querySelectorAll(".cart-item-price");
    var price = 0;
    for(var i = 0; i < itemPrices.length; i++){
        price += Number(itemPrices[i].innerHTML);
    }
    document.querySelector(".cart-price").innerHTML = "₹"+price;
}