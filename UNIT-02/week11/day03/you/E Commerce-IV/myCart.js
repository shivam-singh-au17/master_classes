

let mainDiv = document.getElementById("itemData")



function addMyAllData(el) {

    let prod_div = document.createElement("div")
    prod_div.id = "data"

    let prod_p = document.createElement("p")
    prod_p.innerHTML = el.prodName

    let prod_h4 = document.createElement("h4")
    prod_h4.innerHTML = `Price: ${el.prodPrice}₹`
    prod_h4.style.padding = "5px"

    let prod_img = document.createElement("img")
    prod_img.src = el.prodImage

    prod_div.appendChild(prod_p)
    prod_div.appendChild(prod_h4)
    prod_div.appendChild(prod_img)

    mainDiv.appendChild(prod_div)


}





function showMyVisited() {

    let countProd = document.getElementById("totalProd")
    let totalPrice = document.getElementById("totalPrice")

    let myOneItemData = JSON.parse(localStorage.getItem("myAddedItems"))

    mainDiv.innerHTML = null;

    myOneItemData.forEach(function (el) {

        addMyAllData(el)

    });

    countProd.innerHTML = myOneItemData.length

    let allPrice = 0;
    for (var i = 0; i < myOneItemData.length; i++) {
        allPrice += Number(myOneItemData[i].prodPrice)
    }
    totalPrice.innerHTML = allPrice;

}

showMyVisited()



let homeBtn = document.getElementById("backToHomeBtn");

function showHomeItem() {

    window.location.href = "main.html"
}

homeBtn.addEventListener("click", showHomeItem)




let Promo = document.getElementById("btnPromo");

let countPromo = 0;
function applyPromo(event) {

    countPromo++
    event.preventDefault();
    
    let myAllItemData = JSON.parse(localStorage.getItem("myAddedItems"))
    let myPromoCode = document.getElementById("PromoCode").value;
    let myPromoPrice = document.getElementById("totalPrice");

    let allPrice = 0;
    for (var i = 0; i < myAllItemData.length; i++) {
        allPrice += Number(myAllItemData[i].prodPrice)
    }

    let dicPrice = 0;

    if (myPromoCode == "masai30" && countPromo == 1) {
        dicPrice = ((allPrice * 30) / 100)
        myPromoPrice.innerHTML = dicPrice;
    } else {
        alert("You already used your promo code.")
    }

}

Promo.addEventListener("click", applyPromo)



let Checkout = document.getElementById("btnCheckout");

function CheckoutCart(event) {

    event.preventDefault();
    
    window.location.href = "success.html"
}

Checkout.addEventListener("click", CheckoutCart)