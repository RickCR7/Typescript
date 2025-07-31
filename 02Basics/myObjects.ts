const User = {
    name: "akash",
    email: "bac@com",
    isActive: true
}

function createUser({name: string, isPaid: booleaan}) {

}

let newUser = {name: "priyanka", isPaid: false, email: "a@a.com"}

// createUser({name: "priyanka", isPaid: false, email: "a@a.com"})

createUser(newUser)

function createCourse():{name: string, price: number}{
    return {name:" react", price: 399}
}


type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credCardDetails? : number 
}


type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


let myUser : User = {
    _id: "1234",
    name: "h",
    email: "a@abstract.com", 
    isActive: false
}

myUser.email = "A@A.com"



export{}