
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




const student = [

    {
        name: 'Loki {Hindi-English}',
        Attendece: 8.2,
        img: 'https://themoviesflix.io/wp-content/uploads/2021/07/MV5BNTkwOTE1ZDYtODQ3Yy00YTYwLTg0YWQtYmVkNmFjNGZlYmRiXkEyXkFqcGdeQXVyNTc4MjczMTM@._V1_UY1200_CR9006301200_AL_-200x300-1.jpg',
        release: '12/07/1021',
    },
    {
        name: 'The Tunnel {Hindi-English}',
        Attendece: 6.5,
        img: 'https://themoviesflix.io/wp-content/uploads/2021/07/Download-The-Tunnel-2019-Hindi-English-720p-200x300-1.jpg',
        release: '15/06/2020',
    },
    {
        name: 'The Immigrant {Hindi-English}',
        Attendece: 6.6,
        img: 'https://themoviesflix.io/wp-content/uploads/2021/07/The-Immigrant-2013-720p-200x300-1.jpg',
        release: '05/01/2011',
    },
    {
        name: 'Black Widow {Hindi-English}',
        Attendece: 9.2,
        img: 'https://themoviesflix.io/wp-content/uploads/2021/07/blackwidow-200x300-1.jpg',
        release: '36/07/2021',
    },
    {
        name: 'AINBO {English With Subtitles}',
        Attendece: 7.7,
        img: 'https://themoviesflix.io/wp-content/uploads/2021/07/Ainbo_Theatrical_Release_Poster-200x300.jpg',
        release: '22/05/2021',
    },
    {
        name: 'Jack And Jill {Hindi-English}',
        Attendece: 6.8,
        img: 'https://themoviesflix.io/wp-content/uploads/2021/07/Download-Jack-and-Jill-2011-Dual-Audio-Hindi-English-480p-200x300-1.jpg',
        release: '16/11/2017',
    },
    {
        name: 'The Little Mermaid {Hindi-English}',
        Attendece: 7.3,
        img: 'https://themoviesflix.io/wp-content/uploads/2021/07/81eLiiVgsBL._RI_-200x300.jpg',
        release: '11/12/2015',
    },
    {
        name: 'Miss India {Hindi & Tamil}',
        Attendece: 5.4,
        img: 'https://hdmoviesflix.io/wp-content/uploads/2021/07/0ff0aae6150e05571f4b32c7edb1cfab-200x300.jpg',
        release: '19/09/2020',
    },
    {
        name: 'Peter Pan {Hindi-English}',
        Attendece: 4.7,
        img: 'https://themoviesflix.io/wp-content/uploads/2021/07/Download-Peter-Pan-2003-Dual-Audio-Hindi-English-480p-1.jpg',
        release: '29/02/2003',
    },
    {
        name: 'Thor {Hindi-English}',
        Attendece: 9.9,
        img: 'https://themoviesflix.io/wp-content/uploads/2020/04/download-thor-2011-hindi-720p-1.jpg',
        release: '22/01/2016',
    },
    {
        name: 'Iron Man 2 {Hindi-English}',
        Attendece: 8.1,
        img: 'https://themoviesflix.io/wp-content/uploads/2020/05/Iron-Man-2-2010-Featured-Image.jpg',
        release: '25/04/2017',
    },
    {
        name: 'Stalingrad {Hindi-English}',
        Attendece: 4.2,
        img: 'https://themoviesflix.io/wp-content/uploads/2020/12/stalingrad.jpg',
        release: '30/03/2012',
    },

];

if (localStorage.getItem('student') == null) {
    localStorage.setItem('student', JSON.stringify(student));
}


function showStudent(sd) {


    let students = sd

    let student_div = document.getElementById("mystudent")

    student_div.innerHTML = null

    students.forEach(function (el) {

        let div = document.createElement("div");

        let p_name = document.createElement("p");
        p_name.innerText = el.name

        let p_release = document.createElement("p");
        p_release.innerText = `Release Date: ${el.release}`

        let p_Attendece = document.createElement("p");
        p_Attendece.innerText = `IMDb Rating: ${el.Attendece}`

        let img = document.createElement("img");
        img.src = el.img

        div.append(img, p_name, p_release, p_Attendece)

        student_div.append(div)
    })

}

showStudent(JSON.parse(localStorage.getItem('student')))


function sortLH() {

    let students = JSON.parse(localStorage.getItem('student'))

    students.sort(function (a, b) {
        return a.Attendece - b.Attendece

    })

    showStudent(students)

}

function sortHL() {

    let students = JSON.parse(localStorage.getItem('student'))

    students.sort(function (a, b) {
        return b.Attendece - a.Attendece

    })

    showStudent(students)
}