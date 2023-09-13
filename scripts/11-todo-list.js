const todoList = [{
  name:'make dinner', 
  dueDate: '2023-09-13'
}, {
  name: 'wash dishes',
  dueDate: '2023-09-13'
  }];

renderTodoList();

function renderTodoList () {
let todoListHTML = '';

for (let i = 0; i < todoList.length; i++) {  //
  const todoObject = todoList[i];                 //  GENERATING THE HTML
  //const name = todoObject.name;
  //const dueDate = todoObject.dueDate;
  const { name, dueDate } = todoObject; //shortcut for line 16 and 17
  const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${i}, 1);  
      renderTodoList();
    " class="delete-todo-btn">Delete</button>
    `;    // the code in this function tells us how to put the array on the webpage
  todoListHTML += html;
}
console.log(todoListHTML);

document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML
}



function addOnKeyDown(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value //the code that gets the name inputed

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value //code that gets the date selected
  
  todoList.push({
    //name: name,
    //dueDate: dueDate, //if property and variable name are the same just type it out once (line 51&52)
    name,
    dueDate
  });
  inputElement.value = '';

  renderTodoList();
}