async function getMovie() {

    try {

        let myMovieName = document.getElementById("searchMovie").value
        let myMovieInfo = document.getElementById("moviedata")


        let res = await fetch(`http://www.omdbapi.com/?apikey=e46328f8&t=${myMovieName}&plot=full`)
        let data = await res.json();
        console.log(Number(data.imdbRating));

        if (Number(data.imdbRating) > 8.5 && data.Response == "True") {

            let div = document.createElement("div")

            let img = document.createElement("img")
            img.src = data.Poster

            let h4 = document.createElement("h4")
            h4.innerHTML = "<span>RECOMMENDED</span>"

            let h3 = document.createElement("h3")
            h3.innerHTML = `<span>Title: </span>${data.Title}`

            let p1 = document.createElement("p")
            p1.innerHTML = `<span>Released: </span>${data.Released}`

            let p2 = document.createElement("p")
            p2.innerHTML = `<span>Year: </span>${data.Year}`

            let p3 = document.createElement("p")
            p3.innerHTML = `<span>imdbRating: </span>${data.imdbRating}`

            let p4 = document.createElement("p")
            p4.innerHTML = `<span>Language: </span>${data.Language}`

            div.append(img)
            div.append(h4)
            div.append(h3)
            div.append(p1)
            div.append(p2)
            div.append(p3)
            div.append(p4)
            myMovieInfo.append(div)

        } else if (data.Response == "True") {

            let div = document.createElement("div")

            let img = document.createElement("img")
            img.src = data.Poster

            let h3 = document.createElement("h3")
            h3.innerHTML = `<span>Title: </span>${data.Title}`

            let p1 = document.createElement("p")
            p1.innerHTML = `<span>Released: </span>${data.Released}`

            let p2 = document.createElement("p")
            p2.innerHTML = `<span>Year: </span>${data.Year}`

            let p3 = document.createElement("p")
            p3.innerHTML = `<span>imdbRating: </span>${data.imdbRating}`

            let p4 = document.createElement("p")
            p4.innerHTML = `<span>Language: </span>${data.Language}`

            div.append(img)
            div.append(h3)
            div.append(p1)
            div.append(p2)
            div.append(p3)
            div.append(p4)
            myMovieInfo.append(div)

        } else {

            let div = document.createElement("div")

            let img = document.createElement("img")
            img.src = "https://www.zuloo.com/wp-content/themes/zuloo-v1/assets/images/anim.gif"

            let h1 = document.createElement("h1")
            h1.innerHTML = "NO DATA"

            div.append(img)
            div.append(h1)
            myMovieInfo.append(div)
        }

        document.getElementById("searchMovie").value = null

    } catch (err) {
        console.log('err:', err)
    }

}