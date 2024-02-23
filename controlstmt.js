/**Control statements
 * In JavaScript, control statements are programming constructs that enable you to control the flow of execution within your code. 
 * They determine which code blocks are executed based on specified conditions or how many times certain code blocks are repeated. 
 * Control statements in JavaScript include conditional statements (like if, else, switch), loops (like for, while, do-while).
 */

/**conditonal statements
 * example  and syntax 
 *      ->if
 *          if(condition)
 *              {
 *                  execution;
 *              }
 * 
 * 
 *      ->if else
 *          if(condition)
 *              {
 *                  execution;
 *              }
 *            else
 *                {
 *                  execution;
 *                 }
 * 
 * 
 *      ->if else if
 *           if(condition)
 *              {
 *                  execution;
 *              }
 *            else if(condtion)
 *                {
 *                  execution;
 *                 }
 *                  else
 *                  {
 *                  execution;
 *                  }
 * 
 * 
 *      ->switch
 */



// if statement example
let num =10;

if(num<10)
{
    alert(num);
}

// if else statement example

let age =17;

if(age>=20)
{
    alert("i am an adult");
}
else{
    alert("i am still a kid");
}

// if else if statement example

let x =50;

if(x<=49)
{
    alert("my number is less than or equal to 49");
}
else if(x==50)
{
    alert("my number is actualy equal to 50");
}
else
{
    alert( "i just have a number");
}