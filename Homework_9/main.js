
let ToDo = function () {
    this.list = [];
    this.listCompleted = [];
    this.listDeleted = [];

    const body = document.body;
    const cardTodo = body.querySelector('.sheet_todo');
    const input = body.querySelector('.text_todo');
    const addTask = body.querySelector('.add_todo');
    const listTask = body.querySelector('.list_todo');
    
    input.addEventListener('keydown', (event) => {
        if (event.code == 'Enter') 
        this.createlistItem(input.value)
    })

    input.addEventListener('keyup', (event) => {
        if (event.code == 'Enter') 
        input.value = '';
    })
    
    addTask.addEventListener('click', (event) => {
        if (input.value === '') return;
        this.createlistItem(input.value);
        input.value = '';
        this.list.push(input.value);
    })

    this.createlistItem = function (value) {
        const listItem = document.createElement('li');
        const listBtn = document.createElement('button');

        listItem.className = 'item_todo';
        listItem.textContent = value;
        listTask.appendChild(listItem);

        listBtn.className = 'btn_list_item';
        listItem.appendChild(listBtn);

        listBtn.addEventListener('click', (event) => {
            listTask.removeChild(listItem);
        })

        listItem.addEventListener('click', (event) => {
            listItem.classList.toggle('list_item_complete');
        })
    }

    
}

let todo = new ToDo();

