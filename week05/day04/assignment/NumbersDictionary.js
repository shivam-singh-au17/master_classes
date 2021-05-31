var NumbersDictionary = {

    Yogesh: 915678,
    Nrupul: 512345,
    Prateek: 213456,
    Aman: 120987,
    Madhukar: 090871
}

var NumbersDictionary = {

    Ajay: 21345,
    RamDas: 32146,
    Rohith: 23522,
    Nihal: 98743
}

var NumbersDictionary = {

    Ajay: 21342,
    RamDas: 32146,
    Rohith: 23522,
    Nihal: 98743
}

function Querying(Query, obj) {
    if (obj[Query] == undefined) {
        console.log("Not Found");
    } else {
        console.log(obj[Query]);
    }
}
Querying("Nihal", NumbersDictionary)
Querying("Mani", NumbersDictionary)

