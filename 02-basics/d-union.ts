let score: number | string = 33
score = 44
score = "55"


type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let hitesh: User | Admin = {name: "hitesh", id: 334}

hitesh = {username: "hc", id: 334}

// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
    
// }

function getDbId(id: number | string){
    if (typeof id === "string") {
        const lowerId = id.toLowerCase()
        console.log(`DB id is: ${lowerId}`);
    } else if (typeof id === "number") {
        console.log(`DB + 2 id is: ${id + 2}`);
    }
  
}

getDbId(3)
getDbId("3")


//array 

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", "2", 3, true]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"