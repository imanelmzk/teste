
export{};
interface Person{
    name: string;
    age?: number;
    email: string;
    isStudent: boolean;
    hobbies: string[];
    address: {
        street: string;
        city: string;
        country: string;
    }
}
// Interface OMIT
interface personWithoutEmailAndHobbies extends Omit<Person, 'email' | 'hobbies' >{}
// Teste:
const p:personWithoutEmailAndHobbies={
    name: "Imane",
    age: 25,
    isStudent: true,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
}
console.log(p);
// Interface PICK
interface personWithAdressAndName extends Pick<Person, 'name' | 'address'> {}
// Teste:
const p2: personWithAdressAndName={
    name: "Imane",
    address: {
        street: "123 Main St",  
        city: "Anytown",
        country: "USA"
    }
}

// Interface PARTIAL
interface optionalPerson extends Partial<Person>{}
const p3 : optionalPerson ={}
console.log(p3);

// Interface Required (OBLIGATOIR)
interface RequiredPerson extends Required<Person>{}
const p4: RequiredPerson = {
    name: "Imane",
    age: 25,
    email: "imane@example.com",
    isStudent: true,
    hobbies: ["reading", "coding"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
}
console.log(p4);

const p5: Person ={
    name: "Imane",
    email: "imane.lmzk@gmail.com",
    isStudent: true,
    hobbies: ["reading", "coding"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "Australia"
    }
}
console.log(p5);

/* FONCTIONS GENERIQUES POUR RETOURNER UN ELEMENT D'UN TABLEAU SANS PERDRE LE TYPE
//🧪 Exemple : fonction générique pour récupérer un élément d’un tableau

//👉 Cas réel : une fonction qui retourne un élément d’un tableau sans perdre le type.
function getFirstElement <T extends any>(array: T[]): T|undefined {
    return array[0]; //* || on peut aussi "return array[0]!" pour dire que c'est sûr que le tableau n'est pas vide, mais cela peut causer des erreurs si le tableau est effectivement vide.
}
// tests
//* Numbers
const numbers = [10, 20, 30];
const firstNumber = getFirstElement(numbers);
if(firstNumber !== undefined) {
    console.log(firstNumber.toFixed(1)); // Affiche: 10.00
}
 // Affiche: 10

//* Strings
const strings = ["hello", "world"];
const firstString = getFirstElement(strings);
if (firstString !== undefined) {
    console.log(firstString.toUpperCase()); // Affiche: "HELLO"
}

*/

/* Interfaces optionnelles : pour définir des propriétés qui ne sont pas obligatoires dans un objet
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
*/

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
