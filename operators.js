/**Arithematic Operators-These are operators that help in doing mathematical operation
 * Examples of arithematic operators are:
 * ->Addition(+)
 * -> subtraction (-)
 * ->Division(/)
 * ->Multiplication(*)
 * ->modulus(%)
 */

/**The increament and Decrement operator are used to increase or decrease the value
 * of the variable by 1. 
 *  ->the increment operator is(++)
 *  ->the decrement operator is(--)
 */

let x = 57;
let y = 21;

let total = x+y;   //This will add the two variables
let difference = x-y; //This will subtract the two variables
let div =x/y; //This will divide the variables
let multi =x*y; //This will multiply the two variable
let mod =x%y; //This will provide the reminder of the variables

/**Alice went to a bookstore and bought 3 books for Ksh120 each. 
 * She also bought 2 notebooks for Ksh30 each.
 *  If she paid with a Ksh5000 bill, how much change did she receive? */

let b = 3;
let amountb = 120;
let tamountb = b*amountb;

let n = 2;
let amountn = 30;
let tamountn = n*amountn;

let amount =tamountb+tamountn;
let pay= 5000;
let change = pay-amount;
alert(change)

let bamount = 3*120;
let namount =2*30;
let tamount =bamount+namount;
let paid =5000;
let change2 =paid-tamount;
alert(change2)



/**Assignment Operator-This operator assigns value to a variable
 * example
 *  ->assignment operator(=)
 */

/**comparison operators-These operators compare values
 * examples of comparision operators are
 *  ->greater than(>)
 *  ->less than(<)
 *  ->greater than or equal to(>=)
 *  ->less than or equal to(<=)
 *  ->equal to (==)
 *  ->not equal to/inequality (!=) 
 *  ->strict equal to(===)
 *  ->strict inequality/strict not equal to(!==)
 * 
 * */

let p=10;
let q=5;
console.log(p>q)


/**logical operators
 *  ->logical and (&&)
 *  ->logical or (||)
 *  ->logical not (!)
 */

//Logical and
//true && true = (true)
//true && false= (false)
//false &&true =(false)
//false && false =(false)

//logical or
//true||true;=true
//true||false;=true
//false||true;=true


/**conditional operator()
 * optional chaining operator(?.)
 * Nullish coalescing operator(??)
 * 
 */

