function addTwo(num : number){
    return num + 2 ;
}


function getUpper(val : string){
    return val.toUpperCase()
}


function signUpUser(name : string, email : string, isPaid : boolean){}

let loginUser = (name : string , email : string, isPaid: boolean = true) => {}

console.log(addTwo(5))
console.log(getUpper("mahesh"))
console.log(signUpUser("mahesh", "rautmahesh213@gmail.com", false))
console.log(loginUser("mahesh", "rautmahesh213@gmail.com"))



const getHello = (s : string) : string => {
    return " "
}

const heros = ["thor", "ironman", "wanda"]
// const heros = [1, 2, 3]

console.log(heros.map((hero) : string => {
    return `hero is ${hero}`
}))


function consoleError (errmsg : string) : void {
    console.log(errmsg)
}

function handleError (errmsg : string) : never {
    throw new Error(errmsg)
}

export{}