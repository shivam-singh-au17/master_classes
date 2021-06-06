
var data = {

    nameAge: {
        Nrupul: ["cmd", "python", "sql"],
        Prateek: ["js", "html"],
        Aman: ["ds", "algo"],
        Albert: ["js", "react"]
    }


}



console.log(data.nameAge.Albert);

function Querying(Query, obj) {
    if (obj[Query] == undefined) {
        console.log("Not Found");
    } else {
        console.log(obj[Query]);
    }
}
Querying("Nrupul", data.nameAge)







// var NumbersDictionary = {

//     Ajay: 21342,
//     RamDas: 32146,
//     Rohith: 23522,
//     Nihal: 98743
// }


