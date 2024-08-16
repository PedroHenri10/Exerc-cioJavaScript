/*
## functions #5

1. create "calculateTotal" function
2. add two parameters subTotal, tax
3. return sum of paramaters

4. create 3 vars "order1", "order2", "order3"
5. call calculateResult, pass in some values and assign result each other
6. log all three orders
7. refactor "calculateTotal" to function expression

*/ 

const calculateTotal = function (subtotal, tax){
   return subtotal + tax;
}

const order1 = calculateTotal(500, 10);
const order2 = calculateTotal(700, 20);
const order3 = calculateTotal(2800, 50);

console.log(order1, order2, order3);
