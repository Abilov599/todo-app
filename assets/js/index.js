const todosContainer = document.querySelector("#todos");
const addBtn = document.querySelector("#addBtn");
const input = document.querySelector("#input");

addBtn.addEventListener("click", () => {
  if (input.value) {
    let todoBox = new Todo(input.value).render();
    todosContainer.insertAdjacentHTML("beforeend", todoBox);
    input.value = "";
  } else {
    alert("Type todo first");
  }
  const deleteBtn = document.querySelectorAll(".btn-danger");
  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.remove();
    });
  });
  const editBtn = document.querySelectorAll(".btn-warning");
  editBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      input.value =
        e.target.parentNode.parentNode.querySelector("h4").innerText;
    });
  });

  const checkBtn = document.querySelectorAll(".checkbox");
  checkBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target.checked) {
        e.target.parentNode.querySelector("h4").style.textDecoration =
          "line-through";
      } else if (!e.target.checked) {
        e.target.parentNode.querySelector("h4").style.textDecoration = "none";
      }
    });
  });
});

class Todo {
  constructor(text) {
    this.text = text;
  }
  render() {
    let field = `<div class="row justify-content-center align-items-center mb-3">
            <input class="col-1 checkbox" type="checkbox" />
            <div class="col-8"><h4 class="m-0">${this.text}</h4></div>
            <div
              class="btn-holder col-3 p-0 d-flex justify-content-center gap-2"
            >
              <button
                style="max-width: 70px; width: 100%"
                class="btn btn-warning"
              >
                Edit
              </button>
              <button
                style="max-width: 70px; width: 100%"
                class="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>`;

    return field;
  }
}
