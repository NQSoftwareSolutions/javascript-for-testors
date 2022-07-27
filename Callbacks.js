// Callbacks are earliest and most straight farward solution to 
// Async code (code which execute in random order)
// 


// console.log("*********************")
// console.log("Without Callbacks")
// console.log("*********************")
// Async code
// this result will be varies because of random time

// function print1(string){
//     setTimeout(() => {
//         console.log(string)
//     }, Math.floor(Math.random() * 100))
// }

// print1("start");
// print1("Printing some thing");
// print1("End");

console.log("*********************")
console.log("With Callbacks")
console.log("*********************")

function print2(string, callback){
    setTimeout(() => {
        console.log(string)
        callback()
    }, Math.floor(Math.random() * 100))
}

print2("start", () => {
    print2("Printing some thing", () => {
        print2("End", () => { })
    })
});