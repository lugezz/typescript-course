let greetings: string = "Hello Hitesh";

greetings.toLowerCase()
console.log(greetings);

// number

let userId = 334455.3

const fixedUserId = userId.toFixed()
console.log('userId', userId);
console.log('fixedUserId', fixedUserId);
// userId = "hitesh" -> Error: Type 'string' is not assignable to type 'number'.

// boolean
let isLoggedIn: boolean = false



// any

let hero: string;

function getHero(){
    return "thor"
}

hero = getHero()



export {}