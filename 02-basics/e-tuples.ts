// const user: (string | number)[] = [1, "hc"]
let tUser: [string, number, boolean]

tUser = ["hc", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "example@google.com"]

newUser[1] = "hc.com"
// error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string | number'
// newUser.push(true)

console.log(newUser)
