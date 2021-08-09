

async function getNews(url) {
    try {

        let res = await fetch(url)
        let data = await res.json();
        return data.data

    } catch (err) {
        console.log('err:', err)
    }


}


function addNewsData(allNwes, parent) {


    allNwes.forEach(({ title, author, description, image, url }) => {

        if (image != null) {


            let divBox = document.createElement("div")
            divBox.id = "newsBox1"
            let div1 = document.createElement("div")
            let div2 = document.createElement("div")
            let div3 = document.createElement("div")
            let h2 = document.createElement("h2")

            let a1 = document.createElement("a")
            a1.innerHTML = title
            a1.setAttribute("href", "./open.html")

            let h4 = document.createElement("h4")
            h4.innerHTML = author

            let p = document.createElement("p")

            let a2 = document.createElement("a")
            a2.innerHTML = description
            a2.setAttribute("href", url)

            let img = document.createElement("img")
            img.src = image

            h2.append(a1)
            div1.append(h2, h4)
            p.append(a2)
            div2.append(p)
            div3.append(img)

            divBox.append(div1, div2, div3)
            parent.append(divBox)


        }
    });

}


export { getNews, addNewsData}