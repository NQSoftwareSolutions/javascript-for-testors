// IIFE are functions which are invoked as soon as they are created and we dont need to explicitly invoke them.
// IIFE can't be invoked again like normal methods

// What happen here 3 things
// Function is created
// Function is excuted
// Funtion is discarded

// with out name function
(function(){
    console.log("Hello IIFE")
})()

// with name function
// Named function is usefull when recursion needed (Function call itself)
// semi collon is naccessory if any statement is available before IIFE
;(function print(){
    console.log("Hello IIFE")
})()