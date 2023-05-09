window.addEventListener('load', () => {
    const form = document.querySelector('header .new-task-form');
    const input = document.querySelector('.new-task-form .input');
    const list_el = document.querySelector('.task-list .tasks');


    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const task = input.value;
        console.log(task)

        if (!task) {
            alert("Input box is empty!")
            return;
        }

        const taskEl = document.createElement('div');
        const inputCheckboxEl = document.createElement('div');
        const inputContentEl = document.createElement('div');
        const btnsEl = document.createElement('div');
        taskEl.classList.add("task");
        inputCheckboxEl.classList.add("input-checkbox");
        inputContentEl.classList.add("input-content");
        btnsEl.classList.add("btns");
        
        const InputCheckboxInput = document.createElement('input');
        InputCheckboxInput.type = "checkbox";
        InputCheckboxInput.classList.add('checkbox','input');
        inputCheckboxEl.appendChild(InputCheckboxInput);

        const inputContentText = document.createElement('input');
        inputContentText.type = "text";
        inputContentText.setAttribute('readonly','readonly');
        inputContentText.value = task;
        inputContentEl.appendChild(inputContentText);

        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        editBtn.classList.add('btn');
        deleteBtn.classList.add('btn');
        editBtn.innerHTML = "Edit";
        deleteBtn.innerHTML = "Delete";
        btnsEl.appendChild(editBtn);
        btnsEl.appendChild(deleteBtn);

        taskEl.appendChild(inputCheckboxEl);
        taskEl.appendChild(inputContentEl);
        taskEl.appendChild(btnsEl);

        list_el.appendChild(taskEl)


        input.value = "";

        editBtn.addEventListener('click', () => {
            if(editBtn.innerText.toLowerCase() == 'edit') {
                inputContentText.removeAttribute('readonly');
                inputContentText.focus();
                editBtn.innerText = 'Save';
            } else {
                inputContentText.setAttribute('readonly','readonly');
                editBtn.innerText = 'Edit';
            }
        })
        deleteBtn.addEventListener('click',() => {
            list_el.removeChild(taskEl);
        })
        
        InputCheckboxInput.addEventListener('change', () => {
            if (InputCheckboxInput.checked) {
                inputContentText.style.textDecoration = 'line-through';
            } else {
                inputContentText.style.textDecoration = 'none';
            }
        });
        
    });
});