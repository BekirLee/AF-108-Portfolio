const todoInput = document.querySelector('.todoInput');
const addBtn = document.querySelector('.addTodo');
const clearBtn = document.querySelector('.clearAll');
const todoList = document.querySelector('.todoList');

let todos = [];

function renderTodos() {
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';

        const span = document.createElement('span');
        console.log(todo)
        span.className = 'todo-text ' + (todo.done ? 'done' : 'not-done');
        span.textContent = `${index + 1}. ${todo.text}`;

        const doneBtn = document.createElement('button');
        doneBtn.textContent = todo.done ? 'go back' : 'done';
        // doneBtn.className = "submitDisabled" ? 'submitDisabled' : '';
        doneBtn.onclick = () => {
            todo.done = !todo.done;
            renderTodos();
        };

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        //yeni oyrendim disabled hissesini burda istifadesini
        
        editBtn.disabled = todo.done;
        // ?if (to) ""  true
        editBtn.onclick = () => {
            const newText = prompt('New text input :  ', todo.text);
            if (newText) {
                todo.text = newText
                renderTodos();
            }
        };

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'delete';
        console.log(deleteBtn.disabled)
        deleteBtn.disabled = !todo.done;
        // todo.done = true ? deleteBtn.classList.add('submitDisabled') : " "
        if (!deleteBtn.disabled) {
            deleteBtn.onclick = () => {
                todos.splice(index, 1);
                renderTodos();
            };
        }

        li.appendChild(span);
        li.appendChild(doneBtn);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

addBtn.onclick = () => {
    const val = todoInput.value;
    if (!val) {
        alert('error!');
        return;
    }

    todos.push({ text: val, done: false });
    todoInput.value = '';
    renderTodos();
};

// enter press
todoInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') addBtn.click();
});

clearBtn.onclick = () => {
    if (confirm('sure to delete them all?')) {
        todos = [];
        todoList.innerHTML = '';

        // renderTodos();
    }
};

renderTodos();
