// Sync code

console.log("Sync Code Results")
console.log("*********************")

function print(string){
    console.log(string)
}

print("start");
print("Printing some thing");
print("End");

console.log("*********************")
console.log("Async Code Results")
console.log("*********************")

// Async code
// this result will be varies because of random time

function print2(string){
    setTimeout(() => {
        console.log(string)
    }, Math.floor(Math.random() * 100))
}

print2("start");
print2("Printing some thing");
print2("End");