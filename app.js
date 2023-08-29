$(".cart-dropdown").hide()
$(".cart-btn-inner").click(function(){
    if($(".remove-btn").length == 0){
        $(".cart-dropdown").hide();
        return;
    }
    $(".cart-dropdown").slideToggle();
});


function ready(){
    $(".remove-btn").click(function(){
        $(this).parent().parent().remove();
        cartQuantity()
    })
}

$(".add-btn").click(function(){
    var item = $(this).parent().parent().clone();
    item.appendTo(".shopping-cart");
    changeAppearInCart();
    cartQuantity();
});

function changeAppearInCart(){
    $(".shopping-cart button").addClass("btn-danger").removeClass("btn-success");
    $(".shopping-cart button").addClass("remove-btn").removeClass("add-btn");
    $(".shopping-cart button").text("Remove");
    ready();
}

function cartQuantity(){
    if($(".remove-btn").length > 0){
        $(".cart-bell-icon").text($(".remove-btn").length);
        $(".cart-bell-icon").removeClass("hidden");
    }else{
        $(".cart-bell-icon").addClass("hidden");
    }
}

