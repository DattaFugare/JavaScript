   
    module.exports = class person
{
    age=25

    //gettermethod  when you delcear get before function i.t mens it is prop

    get location ()
    {
        return "canada"
    }
    //constructor is  method  which excutes by defult when you create obj of class

    constructor(fistname , lastname)  // here fistname lastname is instance varibles
    {
         this.fistname =  fistname    //this.fistname  belongs to current class and accessbale to entire class
         this.lastname =  lastname
    }

    fullname()
    {
        console.log(this.fistname+this.lastname)
    }

}

// let personobj =new person("datta","fugare")  
// let personobj1 =new person("sujay","fugare")

// console.log(personobj.age)
// console.log(personobj.location)
// personobj.fullname()
// personobj1.fullname()


