// arrow functions are used to compacting the function

//with out arrow function

function product1 (a, b) {
    return a + b
}
console.log("Product is "+product1(4, 10))

// or

product2 = function (a, b) {
    return a + b
}
console.log("Product is "+ product2(4, 11))

//with arrow function

product3 = (a, b) => {
    return a + b
}
console.log("Product is "+product3(4, 12))

//or if function body have only one line or statement

product4 = (a, b) => a + b
console.log("Product is "+product4(4, 13))

// when we have only one parameter
product5 = (a) => a + 14
console.log("Product is "+product5(4))

// when we have no parameter
product6 = () => 4 + 15
console.log("Product is "+product6())