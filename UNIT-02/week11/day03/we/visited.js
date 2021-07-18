

    let data_div = document.getElementById('data')

function appendLocations(el) {


    let div = document.createElement('div')

    let p_name = document.createElement('p')
    p_name.innerHTML = el.name

    let p_rating = document.createElement('p')
    p_rating.innerHTML = el.rating

    let p_image = document.createElement('img')
    p_image.src = el.image


    div.appendChild(p_name)
    div.appendChild(p_rating)
    div.appendChild(p_image)

    data_div.append(div)


}



function ShowVisited() {



    let data = JSON.parse(localStorage.getItem('visited'))

    data_div.innerHTML = null

    data.forEach(function (el) {

        appendLocations(el);

    });


}

ShowVisited()

