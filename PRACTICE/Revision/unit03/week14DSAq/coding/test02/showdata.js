
function AddMyAllData(e) {

    e.preventDefault();

    let myFormData = {

        Day: document.getElementById("selectDay").value,
        dataAddNote: document.getElementById("dataAded").value,

    };

    let myArr = localStorage.getItem("myLocalStorage")

    if (myArr == null) {

        myArr = []
    } else {
        myArr = JSON.parse(localStorage.getItem("myLocalStorage"))
    }

    myArr.push(myFormData)


    localStorage.setItem("myLocalStorage", JSON.stringify(myArr))

    console.log('myArr:', myArr)

}




function ShowMyAllData(e) {

    e.preventDefault();

    let myFormData = {

        Day: document.getElementById("selectDayShow").value,

    };

    console.log('myFormData:', myFormData.Day)

    showMyDataLocation(myFormData.Day)
}



let mainDiv = document.getElementById("myAllNots")

function addMyAllData(el) {

    let prod_div = document.createElement("div")

    let prod_h1 = document.createElement("h1")
    prod_h1.innerHTML = `Day: ${el.Day}`

    let prod_p = document.createElement("p")
    prod_p.innerHTML = el.dataAddNote

    prod_div.appendChild(prod_h1)
    prod_div.appendChild(prod_p)

    mainDiv.appendChild(prod_div)

}




function showMyDataLocation(day) {

    let myOneItemData = JSON.parse(localStorage.getItem("myLocalStorage"))

    mainDiv.innerHTML = null;

    myOneItemData.forEach((el) => {

        if (day == el.Day) {
            addMyAllData(el)
        }

    })
}



export { AddMyAllData, ShowMyAllData}