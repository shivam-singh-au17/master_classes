
let btn = document.getElementById('btn')

function addUserProducts(event) {

    event.preventDefault();

    let prodName = document.getElementById("name").value
    let prodPrice = document.getElementById("price").value
    let prodImage = document.getElementById("image").value

    let myLocation = {
        prodName,
        prodPrice,
        prodImage
    }

    let myArr = localStorage.getItem("myLocalStorage")

    if (myArr == null) {

        myArr = []
    } else {
        myArr = JSON.parse(localStorage.getItem("myLocalStorage"))
    }

    myArr.push(myLocation)

    localStorage.setItem("myLocalStorage", JSON.stringify(myArr))

    var count = 0;
    for (var i = 0; i < myArr.length; i++) {
        if (myArr[i].prodName == myLocation.prodName) {
            count++;
        }
    }

    if (count >= 2) {
        alert(" You've Already Added This product to Your Cart. ")
    }


    showMyDataLocation()

}

btn.addEventListener("click", addUserProducts)





let mainDiv = document.getElementById("itemData")

function addMyAllData(el) {

    let prod_div = document.createElement("div")
    prod_div.id = "data"

    let prod_p = document.createElement("p")
    prod_p.innerHTML = el.prodName

    let prod_h4 = document.createElement("h4")
    prod_h4.innerHTML = `Price:${el.prodPrice}₹`

    let prod_img = document.createElement("img")
    prod_img.src = el.prodImage

    let prod_btn = document.createElement("button")
    prod_btn.id = "cartBtn"
    prod_btn.innerHTML = "Add to Cart"

    prod_btn.addEventListener("click", function () {

        myVisitedItems(el);

    });

    prod_div.appendChild(prod_p)
    prod_div.appendChild(prod_h4)
    prod_div.appendChild(prod_img)
    prod_div.appendChild(prod_btn)

    mainDiv.appendChild(prod_div)


}




function showMyDataLocation() {

    let myOneItemData = JSON.parse(localStorage.getItem("myLocalStorage"))

    mainDiv.innerHTML = null;

    myOneItemData.forEach(function (el) {

        addMyAllData(el)

    })
}

showMyDataLocation()



function myVisitedItems(obj) {



    let myVisitedArr = localStorage.getItem("myAddedItems")

    if (myVisitedArr == null) {

        myVisitedArr = []
    } else {
        myVisitedArr = JSON.parse(localStorage.getItem("myAddedItems"))
    }

    myVisitedArr.push(obj)

    localStorage.setItem("myAddedItems", JSON.stringify(myVisitedArr))

    alert('Your item has been added successfully.')



}





let showBtn = document.getElementById("myItemCartBtn");

function showVisitedItem() {

    window.location.href = "myCart.html"
}

showBtn.addEventListener("click", showVisitedItem)
