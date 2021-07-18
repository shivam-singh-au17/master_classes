

let student_div = document.getElementById("mystudent")

function showStudent(el) {


    let div = document.createElement("div");

    let p_name = document.createElement("p");
    p_name.innerHTML = `<span>Description: </span>${el.name}`

    let p_release = document.createElement("p");
    p_release.innerHTML = `<span>Time To Prepare: </span>${el.release}`

    let p_Attendece = document.createElement("p");
    p_Attendece.innerHTML = `<span>Price: </span>${el.Attendece}`

    let img = document.createElement("img");
    img.src = el.img

    div.append(img, p_name, p_release, p_Attendece)

    student_div.append(div)


}


function showMyVisitedFood() {

    let myOneItemFood = JSON.parse(localStorage.getItem("myAddedFood"))

    student_div.innerHTML = null;

    myOneItemFood.forEach(function (el) {

        showStudent(el)

    });

}





function SubmitPage() {

    let i = 0;

    setInterval(function () {

        if (i == 0) {
            alert("Your Order is Accepted")
        } else if (i == 3) {
            alert("Your Order is Being Cooked")
        } else if (i == 8) {
            alert("Your Order is Ready")
        } else if (i == 10) {
            alert("Order Out of Delivery")
        } else if (i == 12) {
            alert("Order Delivered")
        }

        i++;
    }, 1000);

}

function LoginPage() {
    window.location.href = 'Login.html'
}


function HomePage() {
    window.location.href = 'Menu.html'
}


function BigStarPage() {
    window.location.href = 'Index.html'
}


function SignUpPage() {
    window.location.href = 'SignUp.html'
}
showMyVisitedFood()





