

    const users = [
   {firstName:"Akshu",age : 22},
   {firstName:"Harshuu",age : 20},
   {firstName:"Veduu",age : 23},
   {firstName:"Ishuu",age : 27},
   {firstName:"Piyuu",age : 24},
]

// More often seen
users.forEach(function(user){
    console.log(user.firstName);
});

// recent in ES6
for(let user of users){
    console.log(user.firstName);
}

users.forEach((user,index)=>{
    console.log(user.firstName,index);
})