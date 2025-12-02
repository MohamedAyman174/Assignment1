Q-1.
    forEach:
        Is an Array method only, we cannot use break or continue to stop or skip iterations.
        Use forEach for simple operations on every element in an array.
    for...of:
        Is a general loop statement, It is used to iterate over any iterable object like Arrays and Strings.
        Use for...of when you need control over the loop flow (break/continue)

            ____________________________________________________________

Q-2.
Hoisting:
    is a JavaScript mechanism where variable and function declarations are moved conceptually to the top of their containing scope during compilation.

    console.log(a); // undefined
    var a = 5;


TDZ:
    is the time span during which a hoisted variable declared with let or const exists but cannot be accessed or assigned a value. The TDZ starts when the variable is hoisted and ends only when its declaration line is executed in the code.

    console.log(b); // Error
    let b = 10;

            ____________________________________________________________

Q-3.
==:
    Compares only the value. It performs Type Coercion before comparing.

===:
    Compares both the value and the type. It performs no type coercion.

            ____________________________________________________________

Q-4.
How try-catch works:
    The code that might throw an error is placed inside the try block.

    If an exception occurs in the try block, execution stops, and control is immediately passed to the catch block, which handles the error object.


Importance in Async Operations:
    Standard try-catch cannot catch errors from traditional asynchronous code.

    try-catch is essential for handling promise rejections when using the modern async syntax. By wrapping an await call in a try-catch block, you can handle asynchronous errors in a synchronous, readable manner, allowing you to catch a rejected Promise as a normal exception.

            ____________________________________________________________

Q-5.
Type Coercion:
    Is automatic conversion done by the JavaScript engine.

    "5" + 3 → "53"  
    "5" - 3 → 2      


Type Conversion:
    Is manual conversion done by the developer.

    Number("123");
    String(50);


