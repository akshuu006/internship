const users = [
     {firstName:"Akshu",age : 22},
   {firstName:"Harshuu",age : 20},
   {firstName:"Veduu",age : 23},
   {firstName:"Ishuu",age : 27},
   {firstName:"Piyuu",age : 24},
]

 const user_names = users.map((user)=>{
    return user.firstName;
})
console.log(user_names);