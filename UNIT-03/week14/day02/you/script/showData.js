
async function getData(url) {

    try {

        let res = await fetch(url)
        let data = await res.json()
        return data

    }

    catch (e) {

        console.log('e:', e)

    }

}


function appendData(products, parent) {

    products.forEach(({ image, title, price}) => {

        let div = document.createElement("div")
        let p1 = document.createElement("p")
        let p2 = document.createElement("span")
        let img = document.createElement("img")

        img.src = image
        p1.innerHTML = title
        p2.innerHTML = `Price: ${price}$`

        div.append(img, p1, p2)

        parent.append(div)

    });

}


export {getData, appendData}