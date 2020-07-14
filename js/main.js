// "To Do" script for website

// Declare array variable
let todoList = [];

// add listener for filter checkbox

let checkbox = document.querySelector("input[name=filter]");

// ToDo function

const addItem = () => {

    // recieve input from HTML
    let todo = document.getElementById("itemInput").value

    // declare object containing item + bool check complete or not
    let itemTodo = { contents: todo, complete: false }

    // add input item to object "itemTodo"
    todoList.push(itemTodo);
    console.log(todoList);
    render(todoList);

}

// mark each item done or not done
const toggleDone = (index) => {

    if (todoList[index].complete === true) {
        todoList[index].complete = false;
    } else {
        todoList[index].complete = true;

    }
    render(todoList);
}

// remove an item from the list 
const remove = (index) => {
    todoList.splice(index, 1);
    render(todoList);
}

// true or false check for checkbox
checkbox.addEventListener('change', function() {
    let filterCheck = false;
    if (this.checked) {
        filterCheck = true
        filter();
    } else {
        render(todoList);
    }
})

const filter = () => {
    let filterList = todoList.filter((item) => item.complete === true)

    console.log(filterList)

    render(filterList)

}

const render = (array) => {
    let todoHTML = array.map((item, index) => {

        if (item.complete == false) {
            return `<li class="list">TODO:${item.contents} <a onclick="toggleDone(${index})" href="#">Mark Done</a><a href="#" onclick="remove(${index})"> x</a></li>`;
        } else {
            return `<li class="list"><s>TODO:${item.contents}</s> <a onclick="toggleDone(${index})" href="#"><s>Mark Not Done</s></a><a href="#" onclick="remove(${index})"><s>x</s></a></li>`;
        }
    }).join('');

    document.getElementById("listItemArea").innerHTML = todoHTML;
}