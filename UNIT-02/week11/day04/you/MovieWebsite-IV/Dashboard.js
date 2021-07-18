

function slidShow() {

    const arr = ["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3028/1033028-h-f99689c557b0", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6797/986797-h", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6138/366138-h", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8712/958712-h", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2491/892491-h"]

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
    }, 2000);


}

slidShow()


function LoginPage() {
    window.location.href = 'Login.html'
}


function HomePage() {
    window.location.href = 'Dashboard.html'
}


function BigStarPage() {
    window.location.href = 'Dashboard.html'
}


function SignUpPage() {
    window.location.href = 'SignUp.html'
}