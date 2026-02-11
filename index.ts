export{};
interface Person {
    name: string;
    age?: number;
}
let x: Person ={
    name: "Imane",
    age: 25
}
console.log(x.name);
console.log(x.age);

// Autre exemple: quand peut cocher selon les choix proposer 
// le saison + les jours du semaine....
/*
enum BookingStatus {
    Pending,
    Confirmed,
    Cancelled
}
let bookingStatus:BookingStatus = BookingStatus.Confirmed;
console.log(bookingStatus);
*/
/* *** Generic function ***
const sum = <T extends number>(number1: T, number2: T) : number =>{
    return number1 + number2;
}

console.log(sum<number>(10, 100));
*/

// un exemple
// const myNumber: number = x.age!; 
// const myNumber: number = x.age as number; --- IGNORE ---
//const myNumber: number = x.age ?? 0 ;
//console.log(myNumber);
/*
type MyType = string | number;
let y: MyType = "Hello World";
let z: MyType =10;
let w: MyType = 10;
console.log(y, z, w);


*/


//const w = () => {
 //   console.log("Hello World");
 //   return 10;
//}
/*
const v: (x:number, y:number) => number=(x, y) =>{
    return x+y;
}

const z:(x:string, y:number) =>string = (string, number) =>{
    return "Hello World";
}
*/
/*
export let arr: number[] = [1, 2, 3, 4, 5];
console.log(arr);
*/
/*
type User={
    name: string,
    age? :number | null
}
type Student={
    score: number
}
const x: User & Student={
    name: "Imane",
    age: null,
    score: 95
}
console.log(x);
*/