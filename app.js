// Створити ToDoList

// інпут введення назви завдання, валідація (поле обов'язкове)
// при кліку додати на кнопку додати, завдання з'являється під формою, якщо поставити галочку біля завдання, то текст перекреслюється
// якщо забрати галочку то перекреслення зникає
// можливість видалити завдання

let form = document.createElement("div");
document.body.appendChild(form);

let input = document.createElement("input");
form.appendChild(input);
input.style.display = "block";
input.placeholder = "enter task name";

let addBtn = document.createElement("button");
addBtn.type = "submit";
form.appendChild(addBtn);
addBtn.innerHTML = "Add to list";
addBtn.disabled = true;

let toDoListDiv = document.createElement("ul");
document.body.appendChild(toDoListDiv);

addBtn.addEventListener("click", addTaskToList);

input.addEventListener("input", requireInput);

function requireInput(event) {
    console.log(event);
    if (
        event.target.value.trim() === "" ||
        event.target.value.trim().length < 1
    ) {
        addBtn.disabled = true;
    } else {
        addBtn.disabled = false;
    }
}

function addTaskToList() {
    // requireInput();
    let taskDiv = document.createElement("li");
    toDoListDiv.appendChild(taskDiv);

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.display = "inline-block";
    taskDiv.appendChild(checkbox);

    let task = document.createElement("p");
    task.innerHTML = input.value;
    task.style.display = "inline-block";
    taskDiv.appendChild(task);

    let removeBtn = document.createElement("button");
    removeBtn.innerHTML = "delete";
    taskDiv.appendChild(removeBtn);

    checkCheckbox(checkbox);
    removeTaskDiv(removeBtn, taskDiv);
    clearInput();
    addBtn.disabled = true;
}

function clearInput() {
    input.value = "";
}
// let test = document.querySelector(".test");
// let chec = document.querySelector(".chec");

function checkCheckbox(chec) {
    chec.addEventListener("click", function () {
        if (chec.checked) {
            chec.nextSibling.style.textDecoration = "line-through";
        } else {
            chec.nextSibling.style.textDecoration = "none";
        }
    });
}

function removeTaskDiv(remove, parent) {
    remove.addEventListener("click", function () {
        parent.remove();
    });
}
