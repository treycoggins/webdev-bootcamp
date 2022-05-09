let option;
const todos = [];

while(option !== 'quit') {
  option = prompt('What would you like to do? (add/list/delete/quit)');

  // add a todo
  if (option === 'add') {
    const task = prompt('What task would you like to add?');
    todos.push(task);
    console.clear();
    for (i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
  } else if (option === 'list') {
    // list todos
    console.clear();
    for (i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
  } else if (option ===  'delete') {
    // delete a todo
    const numToDelete = prompt('Enter a task number to delete:');
    if (option === 'delete') {
      todos.splice(numToDelete, 1);
      console.clear();
    for (i = 0; i < todos.length; i++)  {
      console.log(`${i}: ${todos[i]}`);
      }
    } 
  } else if (option === 'quit') {
    break;
  } else {
    alert('I don\'t know that command.');
  }
}

console.log("You have quit the app.");