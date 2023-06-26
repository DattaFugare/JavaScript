const flag = true;

if (flag) {
    console.log("condtion satisfy")

}
else {
    console.log("condtion not satisfy")
}



if (!flag) {
    console.log("condtion satisfy")

}
else {
    console.log("condtion not satisfy")
}



// while loop

let i = 0


// while(i<10)
// {
//     i++;
//     console.log(i)
// }



// do {

//     i++;


// } while (i<10);
// console.log(i)



for (let k = 0; k < 10; k++) {
    console.log(k)
}

console.log("********************")

//from 1 to 100 give me common multiple value of 2 and 5--->&&

let count = 0
for (let k = 1; k <= 100; k++) {
    if (k % 2 == 0 || k % 5 == 0) {
        count++

        if (count == 3)


            console.log(k)
    }




}