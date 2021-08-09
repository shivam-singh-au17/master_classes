

let Jewellery_div = document.getElementById("myJewellery")

function showJewellery(el) {


    let div = document.createElement("div");

    let p_name = document.createElement("p");
    p_name.innerHTML = `<span>Name: </span>${el.name}`

    let p_brand = document.createElement("p");
    p_brand.innerHTML = `<span>Brand: </span>${el.Brand}`

    let p_Price = document.createElement("p");
    p_Price.innerHTML = `<span>Price: </span>${el.Price}`

    let img = document.createElement("img");
    img.src = el.img

    div.append(img, p_name, p_brand, p_Price)

    Jewellery_div.append(div)


}





function showMyVisitedJewellery() {

    let countProd = document.getElementById("totalProd")
    let totalPrice = document.getElementById("totalPrice")

    let myOneItemJewellery = JSON.parse(localStorage.getItem("myAddedJewellery"))

    Jewellery_div.innerHTML = null;

    myOneItemJewellery.forEach(function (el) {

        showJewellery(el)

    });


    countProd.innerHTML = myOneItemJewellery.length

    let allPrice = 0;
    for (var i = 0; i < myOneItemJewellery.length; i++) {
        allPrice += Number(myOneItemJewellery[i].Price)
    }
    totalPrice.innerHTML = allPrice;

}


showMyVisitedJewellery()




let Promo = document.getElementById("btnPromo");

let countPromo = 0;
function applyPromo(event) {

    countPromo++
    event.preventDefault();

    let myAllItemData = JSON.parse(localStorage.getItem("myAddedJewellery"))
    let myPromoCode = document.getElementById("PromoCode").value;
    let myPromoPrice = document.getElementById("totalPrice");

    let allPrice = 0;
    for (var i = 0; i < myAllItemData.length; i++) {
        allPrice += Number(myAllItemData[i].Price)
    }

    let dicPrice = 0;

    if (myPromoCode == "masai30" && countPromo == 1) {
        dicPrice = ((allPrice * 30) / 100)
        myPromoPrice.innerHTML = allPrice -  dicPrice;
    } else {
        alert("You already used your promo code.")
    }

}

Promo.addEventListener("click", applyPromo)








function SubmitPage() {
    window.location.href = 'Checkout.html'

}

function LoginPage() {
    window.location.href = 'Login.html'
}


function HomePage() {
    window.location.href = 'Products.html'
}


function BigStarPage() {
    window.location.href = 'Index.html'
}






