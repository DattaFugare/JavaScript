//inheritance is the main pillar in obj oriented programming .
// one class can inherit /acquire the prop ,methods of another class.
// the class which inheriats the prop of other is known as subclasss
// the class whose prop are inerited is kmow as supwe class

const person = require("./classes");



class pet extends person 
{
    get location()
    {
        return "bluecross"
    }
    constructor(firstname, lastname)
    {
        // call parent class constructor 

        super(firstname,lastname)
    }

}

let obj=new pet("abc","xyz")
console.log(obj.fullname())