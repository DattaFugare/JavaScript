let marks = Array(6)

let mkobj = new Array(20, 30, 40, 50, 60, 70)

console.log(mkobj[2])  //40  access the elements
console.log("******")
mkobj[3] = 55;
console.log(mkobj[3])
console.log("******")

console.log(mkobj)

console.log("******")

console.log(typeof (mkobj))  // ---> object
console.log("******")
console.log(typeof (marks))  // ---> type of array is object 

console.log(mkobj.length)

// add one elements add of the array

mkobj.push(77)
console.log(mkobj.length)
console.log("******")
mkobj.pop()  // it delete last one 
console.log(mkobj.length)
console.log("******")

mkobj.unshift(66)
console.log(mkobj.length)
console.log("******")
mkobj.shift();
console.log(mkobj.length)
console.log("******")
console.log(mkobj)
console.log("******")
console.log(mkobj.indexOf(60))
console.log("******")
// validate 120 is present or not in array

console.log(mkobj.includes(120))
console.log("******")
subobj = mkobj.slice(2, 5)
console.log(subobj)


//want to print all elements from the array

for (let i = 0; i < 3; i++) {
    console.log(subobj[i])
}

//want to print sum of  all elements from the array
console.log("******")
var sum = 0;
for (let i = 0; i < 3; i++) {

    sum = sum + subobj[i];
    console.log(sum)
}
console.log("******")


console.log("******")

//reduce, filter, map

// 1st sum is intermidiate && accumlator
// sum+marks final result 
let total = subobj.reduce((sum, mark) => sum + mark, 0)
console.log(total)

// print the only even number frm the array

//1 way
console.log("******")
var score = [12, 13, 14, 15, 16]
var newscore = []
for (let i = 0; i < score.length; i++) {
    if (score[i] % 2 == 0) {
        newscore.push(score[i])
    }
}

console.log(newscore)
console.log("******")

// 2way using filter
let evenarray = score.filter(score => score % 2 == 0)
console.log(evenarray)

console.log("******")
// map function  --> modify elements of array
// want to multify by 5 
let maparray = evenarray.map(evenarray => evenarray * 5)
console.log(maparray)

//sumup maparray 
let sumofmap = maparray.reduce((sum, val) => sum + val, 0)
console.log("******")
console.log(sumofmap)
console.log("******")
// chaining of array methods

var scoree = [2, 3, 4, 5, 6]
let scoreemap = scoree.filter(scoree => scoree % 2 == 0).map(scoree => scoree * 3).reduce((sum, val) => sum + val, 0)
console.log(scoreemap)

console.log("******")
// sorting array 

let fruits = ["banana", "apple", "mango", "pinaapple"]
fruits.sort()
console.log(fruits)

console.log("******")
var myarray = [2, 13, 4, 5, 6]
console.log(myarray.sort())
console.log("******")
// myarray.sort(function(a,b){
//     return a-b;
// })
console.log(myarray.sort((a, b) => a - b)) // assending order
console.log("******")
console.log(myarray.sort((a, b) => b - a)) // dessending order
