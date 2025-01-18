const todos=[];
const dates=[];

function add(todo,date){
  const todoText=todo.value;
  const dateText=date.value;
  todos.push(todoText);
  dates.push(dateText);
  todo.value='';
  date.value='';
  render(); 
  // const newtodo=document.querySelector(".todos").create("div").
  //   innerHTML('document.querySelector("todo-input").value');
  //   document.parentNode.childNodes(newtodo);
}
function DeleteTodo(index){
  todos.splice(index,1);
  dates.splice(index,1);
  render();
}
function render(){
  document.querySelector(".todos").innerHTML='';
  for(let i=0;i<todos.length;i++){
    const todoRow=document.createElement('div');
    todoRow.setAttribute("class","todo-row");
    //Row elements
    const todoDiv=document.createElement('div');
    const dateDiv=document.createElement('div');
    const DeleteButton=document.createElement('button');

    DeleteButton.setAttribute("class","DeleteButton")
    DeleteButton.innerHTML="Delete";
    DeleteButton.addEventListener("click",()=>DeleteTodo(i))


    todoDiv.innerHTML=`${todos[i]}`;
    dateDiv.innerHTML=`${dates[i]}`;

    const parentEl=document.querySelector('.todos');
    todoRow.appendChild(todoDiv);
    todoRow.appendChild(dateDiv);
    todoRow.appendChild(DeleteButton);
    parentEl.appendChild(todoRow);
  }
}