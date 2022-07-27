// console.log("*********************")
// console.log("With Callbacks")
// console.log("*********************")

// function print(string, callback){
//     setTimeout(() => {
//         console.log(string)
//         callback()
//     }, Math.floor(Math.random() * 100))
// }

// print("start", () => {
//     print("Printing some thing", () => {
//         print("End", () => { })
//     })
// });


console.log("*********************")
console.log("With Promises")
console.log("*********************")

// Promises used to get rid of callbacks hell problems and make our code more readable and fast.
// Promises have three states
// Pending: Function has not completed its execution yet,
// Resolve: Function has completed its execution successfully.
// Reject: When function has any type of error

function print2(string) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log(string)
            resolve()
        }, Math.floor(Math.random() * 100))
    })
}

print2("start")
    .then(() => print2("Printing Something"))
    .then(() => print2("Finish"))
