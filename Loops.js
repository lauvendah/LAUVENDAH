/**loops
 * Loop statements in Javascript are programming constructs that allows you to excute a block of code repeatedly.
 * They are essential for automating repetitive tasks, itetating over arrays or objects and processing data.
 * Javascript provides several types of loop statement:
 *      1-> for loop:The loop is used when you  know the number of the iterations beforehand.
 *      It consists of three parts: intialization,condition and iteration expression.
 *      
 *      syntax
 *      for(intialization;condition;iteration){
 * 
                 //  code block to be executed
 *              }
 *     
 *      2->while loop: The while loop executes a block of code as long as a specified condition 
 *      evaluates to true
 * 
 *     syntax
 *      while(condition){
           //code block to be executed
         }
 * 
 *      3-> do-while loop: Similar to while loop,but it executes the code block atleast once before
 *      checking the condition.
 *      
 *      syntax
 *      do{
              //code block to be executed
          }while (condition);

 */

          // example of for loop

           for (let i=1; i<=10; i++){
             console.log("GreatStack");
            }

           let coding=["javascript","python","cpp"]
           for(let i=0; i <coding.length; i++){
             console.log(coding[i]);
           }

          //  for (let a=1; a <=5; a++){
          //   console.log(a);

          // for(let j=1;j<=3; j++){
          //   console.log("inner loop"+j)
          // }
          //  }


  //  example for loop
  for(let i=0; i<10; i++){
    alert(i);
  }

  // example while loop
  let num=0;
  while(num<5){
    alert(num);
    num++;
  }
  // do while
  let x=0;
  do{
    alert (x);
    x++
  }while(x<20);
  

          

