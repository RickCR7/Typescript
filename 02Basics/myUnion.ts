let score: number | string 
score = 33
score = "55"

type User = {
    name: string;
    id: number
}

type Admin = {
    userName: string;
    id: number
}


let akash : User | Admin = {
    name: "akash",
    id: 123
}

akash = {
    userName: "as",
    id: 345
}

// function getDBID(id: number | string){
//     //making some API calls
//     console.log(`DB id is : ${id}`);
// }

getDBID(3)
getDBID("3")

function getDBID(id: number | string){
   if(typeof id === "string"){
    id.toLowerCase()
    }
}

// array

const data : number[] = [1, 2, 3]
const data1 : string[] = ["1", "2", "3"]
const data2 : (string | number)[] = [1, "2", 3]