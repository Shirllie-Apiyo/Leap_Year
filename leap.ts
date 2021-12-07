//  classes and objects
class Leapyear{
    // fields
    year:number
    //constructor
    constructor(year: number){
        this.year = year
    }
    display (){
        return this.year % 100 === 0 ? this.year % 400 === 0 : this.year % 4 === 0;
    }

    //functions

}// end
let z = new Leapyear(2020)
console.log(z.display())