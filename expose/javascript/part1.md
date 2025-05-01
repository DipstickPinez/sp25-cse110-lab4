1. What is printed by line 9? If the code returns an error, explain why. 
   - Line 9 prints out "values added:  20". 
2. What is printed by line 13? If the code returns an error, explain why. 
   - Line 13 prints out "final result:  20".
3. Why should you not use var? Explain why. 
   - You shouldn't use var because the variable remaining accessible anywhere within the function can easily lead to naming conflicts and scoping issues, creating problems, for example, when you want to create multiple 'temporary' variables x.

4. What is printed by line 9? If the code returns an error, explain why. 
   - Line 9 prints out "values added:  20". 
5. What is printed by line 13? If the code returns an error, explain why. 
   - Line 13 returns an error. The 'let result = 0' means result has a scope limited to the if it is inside of, and result is thus not accessible outside of the if. Since console.log('final result: ', result) is outside the if, it throws an error because as far as that line is concerned, result doesn't exist and hasn't been defined.

6. What is printed by line 9? If the code returns an error, explain why. 
   - The code returns an error. Line 7 gives a 'TypeError: Assignment to constant variable" error before Line 9 can print anything, as the code halts when we try to assign a new value to a variable we declared as a constant.
7. What is printed by line 13? If the code returns an error, explain why. 
   - For similar reasons to line 9, the code returns an error and nothing gets printed, as Line 7 gives us an error first due to us trying to assign a value to a constant.


 