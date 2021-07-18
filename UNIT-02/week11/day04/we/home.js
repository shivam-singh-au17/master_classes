

function slidShow() {

    const arr = ["https://assets.justinmind.com/wp-content/uploads/2019/10/best-20-web-development-blogs.png", "https://blog.internshala.com/wp-content/uploads/2021/01/Web-developer-skills.jpg ", "https://www.qualdev.com/wp-content/uploads/2020/02/Web-Development-101-What-Does-a-Web-Development-Company-Do.jpg"]

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


const student = [

    {
        name: 'shivam',
        Attendece: 929,
        img: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
    },
    {
        name: 'singh',
        Attendece: 398,
        img: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
    },
    {
        name: 'shyam',
        Attendece: 977,
        img: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
    },
    {
        name: 'shahil',
        Attendece: 9656,
        img: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
    },
    {
        name: 'ravi',
        Attendece: 9345,
        img: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
    },
    {
        name: 'mohan',
        Attendece: 904,
        img: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
    },
    {
        name: 'sohan',
        Attendece: 913,
        img: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
    },
    {
        name: 'kamlji',
        Attendece: 922,
        img: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
    },
    {
        name: 'rohit',
        Attendece: 42,
        img: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
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

        let p_Attendece = document.createElement("p");

        p_Attendece.innerText = el.Attendece

        let img = document.createElement("img");

        img.src = el.img

        div.append(img, p_name, p_Attendece)

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