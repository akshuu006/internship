const todolist = document.querySelector(".todo-list");
 console.log(todolist);
 console.log(todolist.innerHTML);

// Make Changes in it :
todolist.innerHTML = " <li>New Todo Task </li>";

// To add New ELement with  Existings Ones:

 todolist.innerHTML += "<li>adding New Todo with Existing</li>";
 todolist.innerHTML += "<li>adding One More</li>";

 const newTodoItem = document.createElement("li");
const newTodoItemText = document.createTextNode("Teach Students");
newTodoItem.append(newTodoItemText);

const todolist = document.querySelector(".todo-list");