
function storageLocation() {

    let form = document.getElementById('myForm')

    let name = form.name.value
    let rating = form.rating.value
    let image = form.image.value

    // let location = {
    //     name: name,
    //     rating: rating,
    //     image:image
    // }

    let location = {
        name,
        rating,
        image
    };


    let arr = localStorage.getItem('locations')

    if (arr == null) {
        arr = []
    } else {
        arr = JSON.parse(localStorage.getItem('locations'))
    }

    arr.push(location)
    console.log('arr:', arr)

    localStorage.setItem('locations', JSON.stringify(arr))




}


let data_div = document.getElementById('data')

function appendLocations(el) {


    let div = document.createElement('div')

    let p_name = document.createElement('p')
    p_name.innerHTML = el.name

    let p_rating = document.createElement('p')
    p_rating.innerHTML = el.rating

    let p_image = document.createElement('img')
    p_image.src = el.image

    let btn = document.createElement('button')
    btn.textContent = 'Add to Visited'

    btn.addEventListener('click', function () {

        addToVisited(el)

    })


    div.appendChild(p_name)
    div.appendChild(p_rating)
    div.appendChild(p_image)
    div.appendChild(btn)

    data_div.appendChild(div)


}



function showLocatioon() {


    let data = JSON.parse(localStorage.getItem('locations'))

    data.forEach(function (el) {

        appendLocations(el);

    });

}

showLocatioon()



function addToVisited(obj) {

     let arr = localStorage.getItem('visited')

    if (arr == null) {
        arr = []
    } else {
        arr = JSON.parse(localStorage.getItem('visited'))
    }

    arr.push(obj)

    localStorage.setItem('visited', JSON.stringify(arr))

}


function showVisited() {
    window.location.href = "visited.html"
}



