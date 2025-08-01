interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId ? : string,
    startTrial : () => string,
    getCoupon(couponName: string, value: number): number
}

// reopening of interface
interface User {
    githubToken : string
}

// inheritance
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const akash : User = {dbId: 22,email: "a@a.com", userId: 1,
    githubToken: "github",
    startTrial: () => {
        return "Trial started"
    },
    getCoupon : (name: "akash", off: 10) => {
        return 10
    }
}

akash.email = "a@bc.com"