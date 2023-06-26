let day = 'tuesday '
console.log(typeof (day))
console.log(day.length)

console.log("***********")

console.log(day.slice(0, 4))

console.log("***********")
console.log(day.split("s"))
console.log("***********")
let splitday = day.split("s")
console.log(splitday[1])
console.log("***********")
console.log(splitday[1].length)
console.log("***********")
console.log(splitday[1].trim().length)
console.log("***********")

let date = "23"
let nextdate = '27'

let diff = parseInt(nextdate) - parseInt(date)

console.log(typeof (diff))

console.log(diff)
console.log("***********")
let diff1 = diff.toString()
console.log(typeof (diff1))
console.log(diff)
console.log("***********")
if (diff == diff1)  // == just comp values
{
    console.log("its ture")
}
console.log("***********")

if (diff === diff1) // === checks datatype as well as vlaue
{
    console.log("its ture")
}
else {
    console.log("its not ture")
}

console.log("***********")

let newquote = day + "is funday enjoy  day"
console.log(newquote)
let val = newquote.indexOf("day")
console.log(val)
console.log("***********")
let val1 = newquote.indexOf("day", 5)
console.log(val1)
console.log("***********")

// find find occurnces of day in string

let count = 0
let value = newquote.indexOf("day")  // if day is not prest then it gives -1
while (value !== -1) {
    count++
    value = newquote.indexOf("day", value + 1)
}
console.log(count)