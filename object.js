// obj is collection of property . property has key and value, key  always be string and value can be any data tpe

let person = {
    firstname: "dattatray",
    lastname: "fugare",
    age: 24,
    fullname : function () 
    {
        console.log(this.firstname+this.lastname)
    }
}

console.log(person.fullname())

console.log(person.lastname)

// change prop of obj at runtime

person.firstname = "sujay"
console.log(person.firstname)

// add new  prop of obj at runtime

person.gender = "male"

console.log(person)
// delete existing prop of obj

delete person.gender
console.log(person)

// check prop exist or not in obj

let result = "gender" in person
console.log(result)

// iterrate over obj or print all the value of obj

for (let key in person) {
    console.log(person[key])
}