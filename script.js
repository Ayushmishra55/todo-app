
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const task = input.value.trim();
  if (!task) return;

  const item = document.createElement("li");
  const text = document.createElement("span");
  text.textContent = task;

  const complete = document.createElement("button");
  complete.textContent = "Done";
  complete.onclick = () => {
    text.style.textDecoration =
      text.style.textDecoration === "line-through"
        ? "none" : "line-through";
  };

  const remove = document.createElement("button");
  remove.textContent = "Delete";
  remove.onclick = () => item.remove();

  item.append(text, complete, remove);
  list.appendChild(item);
  input.value = "";
});

