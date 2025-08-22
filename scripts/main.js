const todoList = document.getElementById("todo-list");
const listInput = document.getElementById("list-input");
const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", () => {
  if (listInput.value === "") {
    alert("empty task");
  } else {
    const newItem = document.createElement("div");
    newItem.classList.add("todo-item");
    newItem.innerHTML = `
    
                <div class="actions">
                    <button class="done-btn">Mark as done</button>
                    <button class="delete-btn hidden">Delete</button>
                </div>
                <h4>Task #${todoList.children.length + 1}</h4>
                <p>${listInput.value}</p>
    `;
    todoList.appendChild(newItem);
    listInput.value = "";
  }
});
todoList.addEventListener("click", (e) => {
  if (e.target.className === "done-btn") {
    e.target.closest(".todo-item").classList.add("done");
    const tickMark = document.createElement("span");
    tickMark.innerHTML = `<img src="src/images/double-tick.png" alt="">`;
    const dltBtn = e.target.parentNode.querySelector(".delete-btn");
    dltBtn.classList.remove("hidden");
    e.target.closest(".todo-item").querySelector("h4").appendChild(tickMark);
    e.target.parentNode.removeChild(e.target);
    dltBtn.addEventListener("click", (e) => {
      e.target.closest(".todo-item").remove();
    });
  }
});
