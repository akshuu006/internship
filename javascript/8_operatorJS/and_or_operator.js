
let firstname = "Akshuu";
let age = 20;


if(firstname[0]=== "A")
    {
    console.log("Name starts with A");
}

if(age>18){
     console.log("you are above 18");
 }


if(firstname[0]=== "A" && age>18){
     console.log("Name starts with A and above 18");
}else{
    console.log("not qualified");
}


if(firstname[0]=== "A" || age>18){
    console.log("Name starts with A and above 18");
}else{
   console.log("not qualified");
}