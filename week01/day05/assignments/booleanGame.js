
// Game of Booleans


// Part-1 (Result: false)
console.log((true || (!true || false)) && false)

// Part-2 (Result: true)
console.log(true || (true && false) || true)

// Part-3 (Result: Not Possible)
console.log(((false || true) || false) || false && true)

// Part-4 (Result: true)
console.log((false && true) || true || (true && false))

// Part-5 (Result: false)
console.log(false || false || false && true || false)



