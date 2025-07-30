function addTwo(num: number): number{
    
    return num + 2
    // return "hello"
}


function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email:string, password: string){}


let loginUSer = (name: string, email: string, isPaid: boolean = false) => {}

let myVal = addTwo(5)
getUpper("akash")

signUpUser("akash", "abc@gmail.com", "abcde")

loginUSer("a", "a@A.com")



// function getValue(myVal: number) : boolean{
//     if(myVal > 5){
//         return true
//     }

//     return "200 OK"
// }


// Arrow function way
const getHello = (s: string): string => {
    return ""
}

const Heros = ["thor", "ironman", "hulk"]

Heros.map(hero => {
    return `hero is ${hero}`
})

function consoleError(errms: string): void{
    console.log(errms)
}


// Some functions never return a value

// never type

function handleError(errmsg: string): never {
    throw new Error(errmsg)
}

export{}