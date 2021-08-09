
async function getData(url) {

    try {

        let res = await fetch(url)
        let data = await res.json()
        return data.meals

    }

    catch (e) {

        console.log('e:', e)

    }

}


function appendData(products, parent) {

    products.forEach(({ strMealThumb, strMeal, strCategory }) => {


        let div = document.createElement("div");
        div.id = "mainCont";

        let div2 = document.createElement("div");
        div2.id = "mainCont2";

        let img = document.createElement("img");
        img.src = strMealThumb

        let p = document.createElement("p");
        p.innerHTML = `<span>Receipe Name: </span>${strMeal}`

        let p2 = document.createElement("p");
        p2.innerHTML = `<span>Receipe Category: </span>${strCategory}`


        div2.append(p, p2);
        div.append(img, div2);
        parent.append(div);

    });

}


export {getData, appendData}