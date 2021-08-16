let BtoG = ['somu', 'virat', 'rohit', 'jadeja', 'ishant', 'rahul']
let MtoG =['somu', 'virat', 'rohit', 'jadeja', 'ishant', 'rahul']
let PtoG = ['somu', 'virat', 'rohit', 'jadeja', 'ishant', 'rahul']


// async await

async function checkAvailability()
{
    
    let promise = new Promise(function (resolve, reject)
    {
        
        setInterval(function () {
            

            if (BtoG.length < 5)
        {
                resolve("train1 is available");
                clearInterval(interval);
                clearInterval(interval1);
                window.location.href = "./booking.html";
                
        }
        else if (MtoG.length < 5)
        {
                resolve("train2 is available");
                clearInterval(interval);
                clearInterval(interval1);
                window.location.href = "./booking.html";
        }
        else if (PtoG.length < 5)
        {
                resolve("train3 is available");
                clearInterval(interval);
                clearInterval(interval1);
                // window.location.href = "./booking.html";
        }
            

        }, 1000)
        
        
    })

    let res = await promise
        console.log('res:',res);


}

function cancelTicket()
{

    let canceling1 = Math.ceil(Math.random() * 5);
    let canceling2 = Math.ceil(Math.random() * 5);
    let canceling3 = Math.ceil(Math.random() * 5);

    setInterval(function () {  BtoG.pop(); },canceling1*1000)
    setInterval(function () {  MtoG.pop(); },canceling2*1000)
    setInterval(function () {  PtoG.pop(); },canceling3*1000)

    console.log(`Passsenger available in BtoG train ${BtoG.length}`);
    console.log(`Passsenger available in MtoG train ${MtoG.length}`);
    console.log(`Passsenger available in PtoG train ${PtoG.length}`);
    
}

let interval = setInterval(cancelTicket, 1000);

function bookTicket()
{
    let canceling1 = Math.ceil(Math.random() * 5);
    let canceling2 = Math.ceil(Math.random() * 5);
    let canceling3 = Math.ceil(Math.random() * 5);

    setInterval(function () { BtoG.push("sachin"); },canceling1*1000)
    setInterval(function () { MtoG.push("sehwag"); },canceling2*1000)
    setInterval(function () { PtoG.push("rishab"); }, canceling3 * 1000)
    
    console.log(BtoG, MtoG, PtoG);
}
let interval1 = setInterval(bookTicket, 3000);