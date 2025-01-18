let todos=[];

function add(todo){
  const todoText=todo.value.trim();
    if(todoText===""){
      alert("Empty Todo!");
    }
    else{
    todos.push(todoText);
    todo.value='';
    render();
    }
}

function DeleteTodo(index){
  todos.splice(index,1);
  render();
}
function handleSaveEvent(input,index,event){
  if(event.type==="click" || ( event.type==="keypress" && event.key==="Enter")){
    const updatedTodo=input.value.trim();
    if(updatedTodo!=""){
      todos[index]=updatedTodo;
      render();
    }
    else{
      alert("Todo cannot be empty!");
    }
  }
}
function editTodo(index,textDiv,todoDiv){
  const input=document.createElement("input");
  input.type="text";
  input.value=todos[index];
  input.setAttribute("class","edit-input");

  //replacing the textDiv with the input child .
  todoDiv.replaceChild(input,textDiv);
  input.focus();
  //adding the Save Button
  const saveButton=document.createElement("button");
  saveButton.innerHTML="Save";
  saveButton.classList.add("save-button");
  input.addEventListener("keypress",(event)=>handleSaveEvent(input,index,event));
  saveButton.addEventListener("click",(event)=>handleSaveEvent(input,index,event));
  
  //Adding a cancel button.
  const cancelButton=document.createElement("button");
  cancelButton.innerHTML="Cancel";
  cancelButton.classList.add("cancel-button");
  cancelButton.onclick=()=>{
    render();
  };
  
  const buttonDiv=document.querySelectorAll(".buttons")[index];
  buttonDiv.innerHTML="";
  buttonDiv.appendChild(saveButton);
  buttonDiv.appendChild(cancelButton);
}
function render(){
  document.querySelector(".todos").innerHTML="";
  const parentEl=document.querySelector(".todos");
  todos.forEach((todo,index) => {
    const todoDiv=document.createElement('div');
      todoDiv.setAttribute("class","todo-div")
      const textDiv=document.createElement('div');
      textDiv.innerHTML=todo;
      textDiv.setAttribute("class","todo-text");
      const buttonDiv=document.createElement('div');
      buttonDiv.setAttribute("class","buttons");
        const editButton=document.createElement("button");  
        editButton.innerHTML="Edit";
        editButton.setAttribute("class","edit-button");
          editButton.onclick=function(){
            editTodo(index,textDiv,todoDiv);
          }
        const deleteButton=document.createElement("button");
          deleteButton.innerHTML="Delete";
          deleteButton.setAttribute("class","delete-button");
          deleteButton.addEventListener("click",()=>{
            DeleteTodo(index);
          })
      buttonDiv.appendChild(editButton);
      buttonDiv.appendChild(deleteButton);
      
      todoDiv.appendChild(textDiv);
      todoDiv.appendChild(buttonDiv);
      
    parentEl.appendChild(todoDiv);
  });  
}
  const todo=document.querySelector(".input-todo");
  todo.addEventListener("keypress",function(Event){
    if(Event.key=="Enter") add(todo);
  });