type CartItem = {
name: string;
price: number;
quantity?: number;
};

const calculateTotal =  (st: CartItem) :number =>{
    let {quantity =1 , price}= st
    let total = price * quantity;
    return total ;

}

console.log(calculateTotal({name: "string",
price: 23,
}));
