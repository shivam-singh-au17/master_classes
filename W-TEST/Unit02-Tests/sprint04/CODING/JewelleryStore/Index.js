

function slidShow() {

    const arr = ["https://images.unsplash.com/photo-1601121141418-c1caa10a2a0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGdvbGQlMjBqZXdlbGxlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80", "https://media.istockphoto.com/photos/gold-jewelry-diamond-shop-with-rings-and-necklaces-luxury-retail-picture-id845498088?k=6&m=845498088&s=612x612&w=0&h=2V1iYhuai4_ASvZnF_7qrhrvPW4hMJAQFP9MV1eHoLk=", "https://c0.wallpaperflare.com/preview/56/821/69/gold-desktop-celebration-jewelry.jpg", "https://wallpaperaccess.com/full/685279.jpg", "https://wallpaperaccess.com/full/2087678.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTsEzNZaZfuynNZXMqd23r6HonD9nqImuHkZ3_GtKoqZz5Uuzt0kJ7_ilrWNBeIYeIGo&usqp=CAU"]

    let div = document.getElementById("slidShow");

    let img = document.createElement("img");

    let i = 0;

    img.src = arr[0]

    div.append(img);

    setInterval(function () {

        if (i == arr.length) {
            i = 0;
        }

        img.src = arr[i]

        i++;
    }, 1500);


}

slidShow()


function LoginPage() {
    window.location.href = 'Login.html'
}


function HomePage() {
    window.location.href = 'Products.html'
}


function BigStarPage() {
    window.location.href = 'Index.html'
}
