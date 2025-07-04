/*
function myfunc(a)
{
    console.log(a);
    console.log('Hello');
}
myfunc();
myfunc("Akshuu");
myfunc([1,2,3]);
myfunc({name:"abc",age:18});

 console.log("inside my function 2.");
}
 */
function myfunc2(a)
{
    console.log("inside my function 2.");
}

function myfunc(callback){
    // here we have passed function
     console.log(a);
    // calling the passing parameter function;
    callback();
}
// Passing function as argument inside function
myfunc(myfunc2);