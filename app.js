const toDoInput = document.querySelector(".toDoInput");
const addBtn = document.querySelector(".addBtn");
const deleteBtn = document.querySelector(".deleteBtn");
const azBtn = document.querySelector(".azBtn");
const list = document.querySelector(".list");

let toDos = [
  {
    id: 1,
    title: "Workout",
  },
  {
    id: 2,
    title: "Eat",
  },
  {
    id: 3,
    title: "Code",
  },
];

createList(toDos);

addBtn.addEventListener("click", () => {
  let obj = {};
  obj.title = toDoInput.value;
  obj.id = toDos.length > 0 ? toDos[toDos.length - 1].id + 1 : 1;

  toDos.push(obj);

  list.innerHTML = "";
  createList(toDos);

  toDoInput.value = "";
  console.log(toDos);
});

azBtn.addEventListener("click", () => {
  list.innerHTML = "";

  createList([...toDos].sort((a, b) => a.title.localeCompare(b.title)));

  console.log(toDos);
});

deleteBtn.addEventListener("click", () => {
  toDos = [];
  list.innerHTML = "";
  console.log("All tasks deleted", toDos);
});

function createList(arr) {
  arr.forEach((toDo) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const editIcon = document.createElement("i");

    li.innerText = toDo.title;

    button.innerText = "Delete";

    button.className = "btn";

    button.addEventListener("click", (e) => {
      console.log(e.target, toDo.id);

      toDos = toDos.filter((elem) => elem.id !== toDo.id);

      list.innerHTML = "";
      createList(toDos);
    });

    li.appendChild(editIcon);
    li.appendChild(button);
    list.appendChild(li);
  });
}
