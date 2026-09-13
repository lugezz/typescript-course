const superHeros: string[] = []
// const heroPower: number[] = []
const heroPower: Array<number> = []

type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = []

const MLModels: number[][] = [
    [255, 255, 255],
    []
]


superHeros.push("spiderman")
superHeros.push("ironman")
heroPower.push(2)
heroPower.push(5)

allUsers.push({name: "Margarito", isActive: true})

console.log('Super Heros:', superHeros)
console.log('Hero Power:', heroPower)
console.log('All Users:', allUsers)
console.log('ML Models:', MLModels)
