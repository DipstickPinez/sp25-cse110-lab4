1. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
   - Line 12 will print the prices.length (which is 3 in this case). This is because in the for loop, we use a *var* i for our four loop. However, since it was declared as a var, the console.log(i) on line 12 can still access i after the for loop, because declaring i as a var makes it accessible to the entire scope of the function. Since the for loop ends when i=prices.length, the console.log prints the final value of i, which is prices.length.
2. What will happen at line 13 and why? If the code causes an error, explain why. ^^^
   - Line 13 will print the final value for discountedPrice from the for loop (which is 150 in this case). Similarly to question 1, declaring discountedPrice as a var makes it accessible outside of the for loop it was created in, meaning that line 13 can access it later to print out whatever the final assigned value to discountedPrice was. The final value of discountedPrice was prices[3] * 1-0.5, or 300 * 0.5 = 150.
3. What will happen at line 14 and why? If the code causes an error, explain why. ^^^
   - Line 14 will print the value of finalPrice (which is 150 in this case). FinalPrice was declared as a var, so we are able to reassign its value in the for loop, then access the reassigned finalPrice value at line 14, because all of it is function-level scope. The final value of finalPrice was the rounded (discountedPrice * 100)/100.
4. What will this function return? Give a brief explanation why. If the code causes an error, explain why. ^^^
   - It will return a 3-length array of [50, 100, 150]. The for loop adds the 'discountedPrice' corresponding to each price in the input 'prices' to discounted, and the function returns discounted. Since we put in [100, 200, 300] as our input 'prices', and our discounted was 0.5/half, the discounted array we return is each of the values in prices but halved.
5. ^^^ What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
   - Line 12 will throw an error. Line 12 is trying to access i, which was declared by let, which means i was only accessible within the scope of the for loop it was declared in, and since Line 12 was outside the for loop, i doesn't exist anymore/is undefined for Line 12.
6. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
   - Line 13 will throw an error, for a similar reason to question 5/line 12. the discountedPrice variable was declared using let, so it was only accessible within the scope of the for loop it was declared in, and is thus not accessible by line 13 outside the loop.
7. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
   - Line 14 will properly print the final value of finalPrice and not throw an error. finalPrice was declared using let at the top level of the function, so finalPrice was accessible within any part of the function, letting Line 14 print the last assigned value of finalPrice.
8. What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
   - Similarly to Question 4, the function returns the same thing as before, a 3-length array of [50, 100, 150]. When we declared the variables using let, for the purposes of creating discounted, we only accessed our variables correctly within the scope they were declared in. We got errors when we tried to incorrectly use console.log to access and print variables that were restricted to a scope not available to the lines we were running console.log in, so the return output is the same once we comment out the erroneous console.logs.
9. ^^^ What will happen at line 11 and why? If the code causes an error, explain why. ^^^
   - Similarly to question 5, the function will throw an error, because i was declared with let, restricting its scope to the for loop, and the console.log(i) outside the loop is trying to access a variable that is no longer defined.
10. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
    - The length of the input prices array will be printed to the console. Although length was declared as a constant, we can still access it at line 12, because it was declared at the top level of the function, meaning length can still be accessed anywhere within the function (and accessing the variable to print it using console.log does not modify the value of the constant)
11. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
    - This functions actually returns the same thing as the other functions, a 3-length array of [50, 100, 150]. Although discounted was declared as a constant, that only means we can't reassign its value directly. However, mutating its constants through pushing things to it does not cause any issues/violate this, so by the end of the function, our discounted array correctly contains the 3 discountedPrices we need.
12. Given the above Object, write the notation for:  (These should be in your part2.md)
    1.  Accessing the value of the name property in the student object
        - student.name
    2.  Accessing the value of the Grad Year property in the student object
        - student['Grad Year']
    3.  Calling the function for the greeting property in the student object
        - student.greeting(); 
    4.  Accessing the name property of the object in the Favorite Teacher property in student
        - student['Favorite Teacher'].name
    5.  Access index zero in the array of the courseLoad property of the student object
        - student.courseLoad[0]
For each of the following questions, note down the output as well as a brief explanation why that output was given  (These should be in your part2.md)
13. Arithmetic
    1.  '3' + 2
        - '32'. When one of part of the operation is a string, the "+" is interpreted as concatenation, so the numeric 2 gets converted to the string '2', then gets concatenated to the string '3', resulting in the string '32'
    2.  '3' - 2
        - 1. The "-" operation is only defined for numbers, so the string '3' is converted to the number 3, then the numeric math "3-2" is done, which gives us the number 1.
    3.  3 + null
        - 3. Since there are no strings in this, the "+" operator is simply used as mathematical addition. "null" is converted into the number 0, so it does the mathematical addition of "3+0", which equals the number 0.
    4.  '3' + null
        - '3null'. Since '3' is a string, the concatenation interpretation of "+" is used, and so "null" is converted to the string 'null', and gets concated to the string '3', resulting in the string '3null'.
    5.  true + 3
        - 4. No strings, "+" is used as mathematical addition. The boolean "true" is converted to the number 1, we do the mathematical addition of "1+3", which gives us the number 4.
    6.  false + null
        - 0. No strings, "+ is used as mathematical addition. The boolean "false" is converted to the number 0, while the "null" value is converted to the number 0, we do the mathematical addition of "0+0", which gives us the number 0.
    7.  '3' + undefined
        - '3undefined'. '3' is a string, "+" is used as concatenation. The "undefined" value is converted to the string 'undefined', and is concatenated to the string '3', giving us the string '3undefined'.
    8.  '3' - undefined
        - NaN. "-" is only defined for numbers, so it tries to convert both parts of the operation to numbers. The string '3' is easily converted to the number 3, however "undefined" has no numeric conversion, so it is instead converted to "NaN". Any mathematical operation performed with "NaN" as a part of the operation also results in "NaN" (because "NaN" is Not A (Valid) Number).
14. Comparison
    1.  '2' > 1
        - true. When comparing values of different types, JavaScript converts the values to numbers. The string '2' is converted to the number 2. The number 2 is more than the number 1, so we get true.
    2.  '2' < '12'
        - false. Since both parts are strings, JavaScript uses lexographical order. The first character of '2' is '2', which is greater than the first character of '12', which is '1', so the string '2' is considered greater than the string '12', so we get false.
    3.  2 == '2'
        - true. When comparing values of different types, JavaScript converts the values to numbers. The string '2' is converted to the number 2. The number 2 is equal to the number 2, so we get true.
    4.  2 === '2'
        - false. The triple equals sign operator does *not* perform type conversion when checking equality. So in this case, we check if the number 2 is the same as/equals the string '2', which it does not, so we get false.
    5.  true == 2
        - false. When comparing values of different types, JavaScript converts the values to numbers. The boolean "true" is converted to the number 1. The number 1 is not equal to the number 2, so we get false.
    6.  true === Boolean(2)
        - true. Both the boolean "true" and the boolean Boolean(2) are both booleans, so no type conversion is needed to be done, which is good since the triple equals sign does not do type conversion. Any non-"empty" boolean is considered true, and the boolean true equals the boolean true, so we get true.
15. Explain the difference between the == and === operators.
        - Both operators check for equality, however == performs type conversion as necessary before checking equality, while === does *not* perform type conversion before checking equality. With ==, 2=='2' is true, because the string '2' is converted to the number 2 before the comparison, while with ===, 2==='2' is false, because the string '2' stays as a string, which is not the same as the number 2.
17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 
        - It results in [2,4,6]. The function returns the array newarr. It uses a for loop to fill newarr, by pushing (callback(array[i])). Our 'callback' is another function we put in as input, so essentially, the for loop will run the doSomething function on each entry in our input array and push that to the output array (since doSomething was the input we used for callback). doSomething doubles the value of the input it is given, so our output array is the original array but with each value doubled, or [2,4,6].
19. What is the output of the above code? (This should be in your part2.md)
        - The output of the code is '1', then '4', then '3', then '2', each on its own line. This is because in the function, console.log(1) then console.log(4) are run at function run time, which means these are up first. console.log(2) is queued with a delay of 1000 ms, and console.log(3) is queued with a delay of 0 ms. However, a delay of 0 ms still means its put into queue, so it has to wait for the stuff run from the function itself to run first, which is why even with a delay of 0 ms, the 3 is printed after the 4. 1000 ms after the 3 is printed, the 2 is printed from the queued console.log(2).
