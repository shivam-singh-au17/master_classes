
    let myvideoDiv = document.getElementById("myvideo")

    async function getMovieData() {

        // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY] 

        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=css+popular+videos&key=AIzaSyAj4OjPasHEhe-s_zf5iWqmMSqNQBITTUI&maxResults=20`)

        let data = await res.json();
        console.log('data:', data)

        let { items } = data

        items = items.filter((el) => {
            return el.id.videoId != undefined;
        });

        items.forEach(({ id: { videoId } }) => {


            let div = document.createElement("div")

            div.innerHTML = `<iframe width="350" height="250" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>`

            myvideoDiv.append(div)

        });


    }


    getMovieData()




    async function getData() {

        myvideoDiv.innerHTML = null

        // my key => AIzaSyDZhSCHBNFx4q3vunnowYC4XPzm4QG_EXI

        let value = document.getElementById("search").value

        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${value}&key=AIzaSyAj4OjPasHEhe-s_zf5iWqmMSqNQBITTUI&maxResults=20`)

        let data = await res.json();
        console.log('data:', data)

        let { items } = data

        items = items.filter((el) => {
            return el.id.videoId != undefined;
        });

        items.forEach(({ id: { videoId } }) => {


            let div = document.createElement("div")

            div.innerHTML = `<iframe width="350" height="250" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

            myvideoDiv.append(div)

        });

    }
