

function slidShow() {

    const arr = ["https://wallpaperaccess.com/full/112587.jpg","https://www.wallpics.net/wp-content/uploads/2018/07/Fast-Food-Laptop-Wallpapers-scaled.jpg", "https://c4.wallpaperflare.com/wallpaper/946/557/290/ice-cream-food-colorful-wallpaper-preview.jpg", "https://wallpaperaccess.com/full/1324855.jpg", "https://wallpapercave.com/wp/wp1929440.jpg", "https://wallpapershome.com/images/pages/ico_h/17819.jpg"]

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
    window.location.href = 'Menu.html'
}


function BigStarPage() {
    window.location.href = 'Index.html'
}


function SignUpPage() {
    window.location.href = 'SignUp.html'
}