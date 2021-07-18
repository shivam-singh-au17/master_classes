


if (localStorage.getItem('student') == null) {


    const student = [
        
        {
            name: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis.',
            Attendece: '₹110 for one',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSordWxU48w9qtWoOvWrAClbyBFTlBO18uOQ&usqp=CAU',
            release: '25min for one',
        },
        {
            name: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis.',
            Attendece: '₹120 for one',
            img: 'https://lh3.googleusercontent.com/proxy/EaLKvR69r2yK8snNkMwPo9Wb2zsf5BdhCgqiEnzTG8bN8OHR5Jcsiba-iy7xyxq4rQAz06PHoGhSrlbvZjTg6sO6W15gYvS4etl4Am0pKe8N6FvDoS5oU--6x08NKW8ms6h42Q0rrQ',
            release: '25min for one',
        },
        {
            name: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis.',
            Attendece: '₹130 for one',
            img: 'https://wallpaperaccess.com/full/1324875.jpg',
            release: '25min for one',
        },
        {
            name: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis.',
            Attendece: '₹140 for one',
            img: 'https://wallpapermemory.com/uploads/405/sweets-background-1366x768-laptop-248529.jpg',
            release: '25min for one',
        },
        {
            name: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis.',
            Attendece: '₹150 for one',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_vfmdhEd58GyJTeqXjx-8zjckp2Fj-6POA&usqp=CAU',
            release: '25min for one',
        },
        {
            name: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis.',
            Attendece: '₹160 for one',
            img: 'https://c4.wallpaperflare.com/wallpaper/454/252/888/food-backgrounds-for-laptop-wallpaper-thumb.jpg',
            release: '25min for one',
        },
        {
            name: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis.',
            Attendece: '₹170 for one',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzvjuWacJA9DOxmVdHyu-FAJmVD8L1Gq7H2DdscxFYz67DDMwGaOcAWdjYkA56iOuqkhg&usqp=CAU',
            release: '25min for one',
        },
        {
            name: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis.',
            Attendece: '₹180 for one',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkIeULJhiBFMja_Zg9RmZ8Of82N8TNwqC-g&usqp=CAU',
            release: '25min for one',
        },
        {
            name: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis.',
            Attendece: '₹190 for one',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_gYsQmA9IBmMt1JAZZqxOWOCO1HrzDwWSg&usqp=CAU',
            release: '25min for one',
        },
        {
            name: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis.',
            Attendece: '₹200 for one',
            img: 'https://lh3.googleusercontent.com/proxy/wyNyj9Ygx-pJKy4_Shk0JBxpVu6S7lLMjXutkEZRRK9hjzPAoJLsnFnMsVZKPowhF5h0MmydnbbqcfDQN7Rm2J-ssPN-4Dew-wzBJ9UUZSW6ztHogmdOLj8UF5ILbPT-OZ0Sua3EfpDt1cwyPw',
            release: '25min for one',
        },
        {
            name: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis.',
            Attendece: '₹101 for one',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ZChC2wTqEHDh5rWNBnoQUAXZ_Fq5--uTEA&usqp=CAU',
            release: '25min for one',
        },
        {
            name: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis.',
            Attendece: '₹102 for one',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRY36YGZLEaKYh3UangWY7OzQuoCebLyw9Nw&usqp=CAU',
            release: '25min for one',
        },
        {
            name: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis.',
            Attendece: '₹103 for one',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSordWxU48w9qtWoOvWrAClbyBFTlBO18uOQ&usqp=CAU',
            release: '25min for one',
        },
        {
            name: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis.',
            Attendece: '₹104 for one',
            img: 'https://lh3.googleusercontent.com/proxy/EaLKvR69r2yK8snNkMwPo9Wb2zsf5BdhCgqiEnzTG8bN8OHR5Jcsiba-iy7xyxq4rQAz06PHoGhSrlbvZjTg6sO6W15gYvS4etl4Am0pKe8N6FvDoS5oU--6x08NKW8ms6h42Q0rrQ',
            release: '25min for one',
        },
        {
            name: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis.',
            Attendece: '₹105 for one',
            img: 'https://wallpaperaccess.com/full/1324875.jpg',
            release: '25min for one',
        },
        {
            name: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis.',
            Attendece: '₹106 for one',
            img: 'https://wallpapermemory.com/uploads/405/sweets-background-1366x768-laptop-248529.jpg',
            release: '25min for one',
        },
        {
            name: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis.',
            Attendece: '₹107 for one',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_vfmdhEd58GyJTeqXjx-8zjckp2Fj-6POA&usqp=CAU',
            release: '25min for one',
        },
        {
            name: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis.',
            Attendece: '₹108 for one',
            img: 'https://c4.wallpaperflare.com/wallpaper/454/252/888/food-backgrounds-for-laptop-wallpaper-thumb.jpg',
            release: '25min for one',
        },
        {
            name: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis.',
            Attendece: '₹109 for one',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzvjuWacJA9DOxmVdHyu-FAJmVD8L1Gq7H2DdscxFYz67DDMwGaOcAWdjYkA56iOuqkhg&usqp=CAU',
            release: '25min for one',
        },
        {
            name: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis.',
            Attendece: '₹100 for one',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkIeULJhiBFMja_Zg9RmZ8Of82N8TNwqC-g&usqp=CAU',
            release: '25min for one',
        },
        
    ];

    localStorage.setItem('student', JSON.stringify(student));
}


function showStudent(sd) {

    
    let students = sd

    let student_div = document.getElementById("mystudent")

    student_div.innerHTML = null

    students.forEach(function (el) {
        
        let div = document.createElement("div");
        
        let p_name = document.createElement("p");
        p_name.innerHTML = `<span>Description: </span>${el.name}`

        let p_release = document.createElement("p");
        p_release.innerHTML = `<span>Time To Prepare: </span>${el.release}`

        let p_Attendece = document.createElement("p");
        p_Attendece.innerHTML = `<span>Price: </span>${el.Attendece}`
        
        let img = document.createElement("img");
        img.src = el.img

        let btn = document.createElement("button");
        btn.innerHTML = "Add to Cart"
        
        btn.addEventListener("click", function () {
            
            myVisitedItems(el);

        });
        
        div.append(img, p_name, p_release, p_Attendece, btn)

        student_div.append(div)
    })
    
}

showStudent(JSON.parse(localStorage.getItem('student')))




function myVisitedItems(obj) {
    
    

    let myVisitedFood = localStorage.getItem("myAddedFood")
    console.log('myVisitedArr2343:', myVisitedFood)
    
    if (myVisitedFood == null) {
        
        myVisitedFood = []
    } else {
        myVisitedFood = JSON.parse(localStorage.getItem("myAddedFood"))
    }
    
    myVisitedFood.push(obj)
    
    localStorage.setItem("myAddedFood", JSON.stringify(myVisitedFood))
    
    alert('Your item has been added successfully.')
    
}





function CartPage() {
    window.location.href = 'Cart.html'
}

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



