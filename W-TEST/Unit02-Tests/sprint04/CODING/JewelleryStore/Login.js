


const admins = [

    {
        username: 'shiva',
        password: 'shiva@12'
    },
    {
        username: 'shiv',
        password: 'shiv@12'
    },
    {
        username: 'singh',
        password: 'singh@12'
    },

];


if (localStorage.getItem('admins') == null) {
    localStorage.setItem('admins', JSON.stringify(admins));
}





function statLogin(e) {

    e.preventDefault();

    const form = document.getElementById("login")

    const username = form.username.value;
    const password = form.password.value;

    const admins = JSON.parse(localStorage.getItem("admins"))

    for (let i = 0; i < admins.length; i++) {

        let u = admins[i].username;
        let p = admins[i].password;

        if (u === username && p === password) {
            window.location.href = 'Cart.html'
            break;
        }
    }
}


function LoginPage() {
    window.location.href = 'Login.html'
}


function HomePage() {
    window.location.href = 'Products.html'
}


function BigStarPage() {
    window.location.href = 'Index.html'
}


