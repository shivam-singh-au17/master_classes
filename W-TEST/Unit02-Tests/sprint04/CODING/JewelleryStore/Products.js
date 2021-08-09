


if (localStorage.getItem('Jewellery') == null) {


    const Jewellery = [
        
        {
            name: 'Gold Lorem ipsum dolor.',
            Price: 11110,
            img: 'https://n1.sdlcdn.com/imgs/j/s/y/Jewar-Mandi-Pendant-Radhe-Krishna-SDL379569207-1-9fec0.jpeg',
            Brand: 'Tanishq',
        },
        {
            name: 'Gold Lorem ipsum dolor.',
            Price: 12110,
            img: 'https://n4.sdlcdn.com/imgs/b/k/v/Saheli-Art-Jewellery-Golden-Jewellery-SDL011672551-1-1513d.JPG',
            Brand: 'Voylla',
        },
        {
            name: 'Gold Lorem ipsum dolor.',
            Price: 13011,
            img: 'https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/185x185/Mens-Gold-Watch-with-Gold-Chain-+-Bracelet-1.jpg',
            Brand: 'CaratLane',
        },
        {
            name: 'Gold Lorem ipsum dolor.',
            Price: 14220,
            img: 'https://5.imimg.com/data5/NA/EW/MY-67303500/jewellary-500x500.jpg',
            Brand: 'Tanishq',
        },
        {
            name: 'Gold Lorem ipsum dolor.',
            Price: 15022,
            img: 'https://5.imimg.com/data5/YX/XI/MY-13817240/orra-gold-set-necklace-gsn14182-500x500.png',
            Brand: 'CaratLane',
        },
        {
            name: 'Gold Lorem ipsum dolor.',
            Price: 16550,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWilqmwI1_UKPYvARpRDfgiO4Z3UBq-RwU6sI8MQhihzlDa9JuGmMjJQCVM-hrOYtmo3g&usqp=CAU',
            Brand: 'Tanishq',
        },
        {
            name: 'Gold Lorem ipsum dolor.',
            Price: 11071,
            img: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/d7048855-742a-406c-a67d-5c2962e69e5e/Images/ProductImages/Source/1000976718_1.jpg',
            Brand: 'CaratLane',
        },
        {
            name: 'Gold Lorem ipsum dolor.',
            Price: 10898,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz-o3dFHMGUY1x3ud0fhXHsNpoEqLzCyFLpI7Gx1p5NvDbyI2jSipxDNme8e0Q-j8URJs&usqp=CAU',
            Brand: 'Tanishq',
        },
        {
            name: 'Gold Lorem ipsum dolor.',
            Price: 99109,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIRRSQPybQd3ZnZJcf6subKbRtvYg2MkgeBpJ2gnkoRcXDKd0yb4Gr16y-5ocTckN2Rg&usqp=CAU',
            Brand: 'PC Jeweller',
        },
        {
            name: 'Gold Lorem ipsum dolor.',
            Price: 17700,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-7AlAAvTzIoScYzNPCHY_gbyvySNce2iqxQ&usqp=CAU',
            Brand: 'Tanishq',
        },
        {
            name: 'Gold Lorem ipsum dolor.',
            Price: 17067,
            img: 'https://5.imimg.com/data5/YX/XI/MY-13817240/orra-gold-set-necklace-gsn14182-500x500.png',
            Brand: 'PC Jeweller',
        },
        {
            name: 'Gold Lorem ipsum dolor.',
            Price: 18950,
            img: 'https://i.pinimg.com/originals/68/8d/b0/688db040a91b0a99773732db8735a4af.png',
            Brand: 'Tanishq',
        },
        {
            name: 'Gold Lorem ipsum dolor.',
            Price: 19890,
            img: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/d7048855-742a-406c-a67d-5c2962e69e5e/Images/ProductImages/Source/1000684061_1.jpg',
            Brand: 'PC Jeweller',
        },
        {
            name: 'Gold Lorem ipsum dolor.',
            Price: 26700,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJMW-tsFEbnLz2SCGMG8vw0MpK1_i86d8JH54ebPqq7ihFfKOW3TEdZO-Wj_D4wYClCLQ&usqp=CAU',
            Brand: 'Voylla',
        },
        {
            name: 'Gold Lorem ipsum dolor.',
            Price: 10139,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYeh8doKCWc7xoMFKdQ42J005xNvmyLtPlLbgzTCzrMhiOYG4HlJxzvpL4T3wErM0wtF4&usqp=CAU',
            Brand: 'Tanishq',
        },
        {
            name: 'Gold Lorem ipsum dolor.',
            Price: 83102,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYVTTYoA72rDqNaRk5BwknyObRcFbxOphJZSmu-pbmiCMeqpYaTUL-QD0Ubj7HOJt55Ts&usqp=CAU',
            Brand: 'CaratLane',
        },
        {
            name: 'Gold Lorem ipsum dolor.',
            Price: 95103,
            img: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/d7048855-742a-406c-a67d-5c2962e69e5e/Images/ProductImages/Source/DIDR0152_1Y.jpg',
            Brand: 'Voylla',
        },
        {
            name: 'Gold Lorem ipsum dolor.',
            Price: 14074,
            img: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/d7048855-742a-406c-a67d-5c2962e69e5e/Images/ProductImages/Source/1000976606_1.jpg',
            Brand: 'Tanishq',
        },
        {
            name: 'Gold Lorem ipsum dolor.',
            Price: 15057,
            img: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/d7048855-742a-406c-a67d-5c2962e69e5e/Images/ProductImages/Source/DIDR0115_1Y.JPG',
            Brand: 'PC Jeweller',
        },
        {
            name: 'Gold Lorem ipsum dolor.',
            Price: 19060,
            img: 'https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/d7048855-742a-406c-a67d-5c2962e69e5e/Images/ProductImages/Source/DIDR0110_1Y.JPG',
            Brand: 'Voylla',
        },
       
      
        
    ];

    localStorage.setItem('Jewellery', JSON.stringify(Jewellery));
}


function showJewellery(sd) {

    
    let Jewellery = sd

    let Jewellery_div = document.getElementById("myJewellery")

    Jewellery_div.innerHTML = null

    Jewellery.forEach(function (el) {
        
        let div = document.createElement("div");
        
        let p_name = document.createElement("p");
        p_name.innerHTML = `<span>Name: </span>${el.name}`

        let p_brand = document.createElement("p");
        p_brand.innerHTML = `<span>Brand: </span>${el.Brand}`

        let p_Price = document.createElement("p");
        p_Price.innerHTML = `<span>Price: </span>${el.Price}`
        
        let img = document.createElement("img");
        img.src = el.img

        let btn = document.createElement("button");
        btn.innerHTML = "Add to Cart"
        
        btn.addEventListener("click", function () {
            
            myVisitedItems(el);

        });
        
        div.append(img, p_name, p_brand, p_Price, btn)

        Jewellery_div.append(div)
    })
    
}

showJewellery(JSON.parse(localStorage.getItem('Jewellery')))




function myVisitedItems(obj) {
    
    

    let myVisitedJewellery = localStorage.getItem("myAddedJewellery")
    console.log('myVisitedArr2343:', myVisitedJewellery)
    
    if (myVisitedJewellery == null) {
        
        myVisitedJewellery = []
    } else {
        myVisitedJewellery = JSON.parse(localStorage.getItem("myAddedJewellery"))
    }
    
    myVisitedJewellery.push(obj)
    
    localStorage.setItem("myAddedJewellery", JSON.stringify(myVisitedJewellery))
    
    alert('Your item has been added successfully.')
    
}





function sortLH() {

    let mySortedJewellery = JSON.parse(localStorage.getItem('Jewellery'))

    mySortedJewellery.sort(function (a, b) {
        return a.Price - b.Price

    })

    showJewellery(mySortedJewellery)

}

function sortHL() {

    let mySortedJewellery = JSON.parse(localStorage.getItem('Jewellery'))

    mySortedJewellery.sort(function (a, b) {
        return b.Price - a.Price

    })

    showJewellery(mySortedJewellery)
}





function CartPage() {
    window.location.href = 'Cart.html'
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




