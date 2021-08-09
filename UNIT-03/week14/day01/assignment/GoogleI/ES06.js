
function Register(e) {

    e.preventDefault();

    let myFormData = {

        name: document.getElementById("Inp1").value,
        email: document.getElementById("inp2").value,
        password: document.getElementById("inp3").value,
        username: document.getElementById("inp4").value,
        mobile: document.getElementById("inp5").value,
        description: document.getElementById("inp6").value,

    };

    myFormData = JSON.stringify(myFormData);

    fetch("https://masai-api-mocker.herokuapp.com/auth/register", {

        method: 'POST',
        body: myFormData,

        headers: {
            'Content-Type': "application/json"
        },

    })

        .then((res) => {
            return res.json();
        })

        .then((res) => {
            console.log('res:', res)
        })

        .catch((err) => {
            console.log('err:', err)
        })


}




function Login(e) {

    e.preventDefault();

    let myFormData = {

        username: document.getElementById("inp8").value,
        password: document.getElementById("inp9").value,

    };

    let bodyData = JSON.stringify(myFormData);

    fetch("https://masai-api-mocker.herokuapp.com/auth/login", {

        method: 'POST',
        body: bodyData,

        headers: {
            'Content-Type': "application/json"
        },

    })

        .then((res) => {
            return res.json();
        })

        .then((res) => {
            console.log('res:', res)
            let u = myFormData.username;
            let t = res.token;
            getMyLoginData(u, t);

        })

        .catch((err) => {
            console.log('err:', err)
        })


}


let mainBox = document.getElementById("mainDiv")

function getMyLoginData(userName, token) {
    fetch(`https://masai-api-mocker.herokuapp.com/user/${userName}`, {

        headers: {
            Authorization: `Bearer ${token}`
        }
    })


        .then((res) => {
            return res.json();
        })

        .then((res) => {

            if (res.name != "") {
                window.location.href = "home.html"
            } 

        })

        .catch((err) => {
            console.log('err:', err)
        })
}
