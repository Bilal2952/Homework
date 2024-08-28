const form = document.getElementById("form");
const todoinput = document.getElementById("input");
const buttonda = document.getElementById("buttonda");
const ul = document.getElementById("ulid");

let todos = [];
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = todoinput.value.trim();

  if (todoinput.value.trim() === "") {
    const divclass = document.getElementById("divclass");
    divclass.style.display = "block";
    const button2 = document.getElementById("button5");
    button2.addEventListener("click", () => {
      divclass.style.display = "none";
    });
  } else {
    const newTodo = {
      id: Date.now().toString(),
      title: inputValue,
      completed: false,
    };
    todos.push(newTodo);
    renderTodos(todos);
  }
  todoinput.value = "";
});
const renderTodos = (todosArray = []) => {
  ul.innerHTML = "";
  todosArray.forEach((item) => {
    const list = document.createElement("li");
    const inputcheckbox = document.createElement("input");
    inputcheckbox.className = "inputcheck"
    inputcheckbox.type = "checkbox";
    inputcheckbox.style.display = "block";
    inputcheckbox.addEventListener("click", () => {
      item.completed = !item.completed;
      if (item.completed) {
        span.style.textDecoration = "line-through";
      } else {
        span.style.textDecoration = "none";
      }
      span.style.textDecorationColor = "red"
    });
    const span = document.createElement("span");
    const buttondelete = document.createElement("button");
    buttondelete.textContent = "Удалить";
    buttondelete.addEventListener("click", () => {
      const divname = document.getElementById("divname");
      divname.style.display = "block";
    });
    const buttonda = document.getElementById("buttonda");

    buttonda.addEventListener("click", () => {

      list.remove();
      inputcheckbox.style.display = "none";
      divname.style.display = "none"
    });


    const buttonotmen = document.getElementById("buttonotmen");
    buttonotmen.addEventListener("click", () => {
      divname.style.display = "none";

    });

    span.textContent = item.title;
    list.append(span, inputcheckbox, buttondelete);
    ul.appendChild(list);
  });
};
renderTodos(todos);
