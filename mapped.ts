const  arratOfNum : number[] = [1,2,3,4];
const arrayOfString : string[] = ["1", "2" , "3" ,"4"]

const arrayOfStringUsingMap: string[] =arratOfNum.map(num =>num.toString())

console.log(arrayOfStringUsingMap);


type AreaOfumber ={
    height: number;
    width: number;
}


// type AreaOfString ={
//     height: string;
//     width: string;
// }


type AreaSring = {
    [key in keyof AreaOfumber]:string
}