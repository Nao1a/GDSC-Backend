function TodoItem(task) {
    this.task = task;
    this.completed = false;
}


function TodoList() {
    this.items = [];
}


TodoList.prototype.addItem = function (task) {
    let newItem = new TodoItem(task);
    this.items.push(newItem);
};

TodoList.prototype.toggleCompletion = function (index) {
    if (index >= 0 && index < this.items.length) {
        this.items[index].completed = !this.items[index].completed;
    }
};


let myList = new TodoList();

myList.addItem("buy groceries");
myList.addItem("do project");
myList.addItem("take the dog out for a walk");
myList.addItem("cook dinner");
myList.toggleCompletion([2]);



let todoContainer = document.getElementById("todo-container");

myList.items.forEach(function (item, index) {
    let taskItem = document.createElement("div");
    taskItem.textContent = item.task;

    let toggleButton = document.createElement("button");
    toggleButton.textContent = "X";
    toggleButton.addEventListener("click", function () {
        myList.toggleCompletion(index);
        updateTaskItemStyle();
    });

    taskItem.appendChild(toggleButton);
    todoContainer.appendChild(taskItem);
});

updateTaskItemStyle();

function updateTaskItemStyle() {
    myList.items.forEach(function (item, index) {
        let taskItem = todoContainer.children[index];
        if (item.completed) {
            taskItem.style.textDecoration = "line-through";
        } else {
            taskItem.style.textDecoration = "none";
        }
    });
}