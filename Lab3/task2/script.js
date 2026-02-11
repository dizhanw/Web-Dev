const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

const createTodoItem = (text) => {
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    const leftContainer = document.createElement('div');
    leftContainer.className = 'todo-left';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const textSpan = document.createElement('span');
    textSpan.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';

    checkbox.addEventListener('change', () => {
        listItem.classList.toggle('completed', checkbox.checked);
    });

    deleteButton.addEventListener('click', () => {
        todoList.removeChild(listItem);
    });

    leftContainer.appendChild(checkbox);
    leftContainer.appendChild(textSpan);

    listItem.appendChild(leftContainer);
    listItem.appendChild(deleteButton);

    return listItem;
};

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskText = todoInput.value.trim();

    if (taskText === '') {
        return;
    }

    const todoItem = createTodoItem(taskText);
    todoList.appendChild(todoItem);

    todoInput.value = '';
});
