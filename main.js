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
    addPost(newTodo);
    getTodos();
  }
  todoinput.value = "";
});

const renderTodos = (todosArray = []) => {
  ul.innerHTML = "";
  todosArray.forEach((item) => {
    const list = document.createElement("li");
    const inputcheckbox = document.createElement("input");
    inputcheckbox.className = "inputcheck";
    inputcheckbox.type = "checkbox";
    inputcheckbox.style.display = "block";
    const span = document.createElement("span");
    inputcheckbox.checked = item.completed
    if (item.completed) {
      span.style.textDecoration = "line-through";
    } else {
      span.style.textDecoration = "none";
    }
    span.style.textDecorationColor = "red";

    inputcheckbox.addEventListener("click", () => {
      updateTodo(item.id, item.completed);
    });
    const buttondelete = document.createElement("button");
    buttondelete.textContent = "Удалить";

    buttondelete.addEventListener("click", () => {
      const divname = document.getElementById("divname");
      divname.style.display = "block";

      buttonda.addEventListener("click", () => {
        list.remove();
        deleteTodo(item.id);
        inputcheckbox.style.display = "none";
        divname.style.display = "none";
      });
    });
    const buttonda = document.getElementById("buttonda");

    const buttonotmen = document.getElementById("buttonotmen");
    buttonotmen.addEventListener("click", () => {
      divname.style.display = "none";
	});

    span.textContent = item.title;
    list.append(span, inputcheckbox, buttondelete);
    ul.appendChild(list);
  });
};

const BASE_URL = "https://3f5b105781d92677.mokky.dev";

const addPost = async (object) => {
  try {
    const response = await fetch(`${BASE_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(object),
    });
    const data = await response.json();
    console.log("WORKING");
  } catch (error) {
    console.log(error);
  }
};

const getTodos = async () => {
  try {
    const response = await fetch(`${BASE_URL}/todos`);
    const data = await response.json();
    renderTodos(data);
  } catch (error) {
    console.error(error);
  }
};

getTodos();

const deleteTodo = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "DELETE",
    });
    getTodos();
  } catch (error) {
    console.log(error);
  }
};

const updateTodo = async (id, completed) => {
  console.log(id);
  try {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !completed,
      }),
    });
    const data = await response.json();
    console.log(data);
    getTodos();
  } catch (error) {
    console.log(error);
  }
};