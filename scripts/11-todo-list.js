const todoList = ['make dinner', 'wash dishes'];

renderTodoList();

function renderTodoList () {
let todoListHTML = '';

for (let i = 0; i < todoList.length; i++) {  //
  const todo = todoList[i];                 //  GENERATING THE HTML
  const html = `
    <p>
      ${todo} 
      <button onclick="
        todoList.splice(${i}, 1);  
        renderTodoList();
      ">Delete</button>
    </p>`;    // the code in this function tells us how to put the array on the webpage
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
  const name = inputElement.value
  
  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}