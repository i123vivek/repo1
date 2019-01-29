/*let myFirstVariable:string = "hello world changed"

console.log(myFirstVariable)*/

/*let multiply = function(x,y){
    return x*y 
}

let multiplyTs = function(x:number,y:number):number{
    return x*y;
}

console.log(multiply(2,3));
console.log(multiplyTs(3,4));*/


/*let divide = (x,y)=>{
    return x/y;
}
let divideTs = (x:number,y:number):number =>{
    return x/y;
}

console.log(divide(10,2));
console.log(divideTs(10,5));*/

// optional parameter

/*let multiplyOrSquare = (x:number,y?:number) =>{
    if (y){
        return x*y;
    }
    else{
        return x*x;
    }
}

console.log(multiplyOrSquare(2))
console.log(multiplyOrSquare(3,4))*/

// rest parameters

/*let allPeopleIWantToInvite: string[] = []

let pushToPartyList = (...people:string[]) =>{
    console.log(people)
    let newPeopleArray = people
    allPeopleIWantToInvite = allPeopleIWantToInvite.concat(newPeopleArray)
    console.log(allPeopleIWantToInvite)
    return allPeopleIWantToInvite;
}

pushToPartyList("aditya","sid","rohit")
pushToPartyList("shikha","kavita","aarohi")*/

// any datatype

/*let numberOfFriends = (friends:any) =>{
    if(typeof friends == 'string'){
        return 'you have 1 friend';
    }
    else{
        let message = `you have ${friends.length} friends`
        return message;
    }
}

console.log(numberOfFriends("aditya"));
console.log(numberOfFriends(["aditya","ajay"]));*/

// useage of this keyword

/*function hello(thing){
    console.log(this)
    console.log(this+"say hello" +thing)

}
hello("world")*/

/*let helloArrow = (thing) =>{
    console.log(this)
    console.log(this+ "say hello" +thing)
}
helloArrow("aditya")*/

/*let myName = {
    firstName : "aditya",
    lastName :"kumar",
    calculateFullName(){
        console.log(this)
        return this.firstName + ' ' +this.lastName;
    }
}
let someName = myName.calculateFullName()*/


/*let myName = {
    firstName : "aditya",
    lastName :"kumar",
    calculateFullName:() =>{
        console.log(this)
        return this.firstName + ' ' +this.lastName;
    }
}
let someName = myName.calculateFullName()*/

/*let myFullName ={
    firstName: "aditya",
    lastName: "kumar",
    calculateFullName(){
        return ()=>{
            console.log(this)
            return this.firstName+ ' ' +this.lastName; 
        }
    }
}
let someOtherName = myFullName.calculateFullName();
someOtherName();*/

class MobilePhone{
    private screenSize : string;
    private RAM : String;
    private Processor : string;
    private camera : number;
    private battery : number;
    private operatingSystem : string;

    constructor(screen_size : string,_RAM : string,_processor: string,_camera : number,_battery : number,_operatingSystem : string){
        this.screenSize = screen_size;
        this.RAM = _RAM;
        this.Processor = _processor;
        this.camera = _camera;
        this.battery = _battery;
        this.operatingSystem = _operatingSystem;
    }
    getoperatingSystem = () =>{
        return this.operatingSystem
    }
    getcamera =() =>{
        return this.camera;
    }
    
    setcameraPixel = (pixel:number) =>{
        this.camera = pixel;
    }
}
let onePlus5t = new MobilePhone("6 inch","6 GB","snapdragon",20,3300,"Android")

let os = onePlus5t.getoperatingSystem()
console.log(os);

console.log(onePlus5t.getcamera());
onePlus5t.setcameraPixel(25);
console.log(onePlus5t.getcamera());

/*class Animal{
    constructor(public limbs: number,public typeOfAnimal: string,public diet?: string){
        this.limbs = limbs;
        this.diet=diet;
        this.typeOfAnimal= typeOfAnimal;
    }
    getDietType=()=>{
        return this.diet;
    }

}
let tiger = new Animal(4,"mammal","carnivore");
let snake = new Animal(0,"reptile");

console.log(tiger.getDietType());*/