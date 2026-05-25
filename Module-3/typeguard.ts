//  Type Guard && in typeof

type AlphaNumranic = number | string

const add = (num1: AlphaNumranic, num2: AlphaNumranic) => {

    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1+ num2
    }
    else{
        num1.toLocaleString() + num2.toLocaleString()
    }

}



// in guard

type NormalUser ={
    name : string;

}
type AdminUser ={
    name: string;
    role: "Admin"
}

const userInfo = ()