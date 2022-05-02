// You can access the 'todoItems' variable from the 'data.js' file, so long as 'data.js'
// comes before 'script.js' in the HTML document
// console.log(todoItems)

// Use the 'todoItems' variable to create the appropriate elements and append them onto
// the page.
const incompleteList = document.querySelector("#incomplete-items");
const completeList = document.querySelector("#complete-items");

const todoForm = document.querySelector("#todoForm");
const inputForm = document.querySelector(".form-control");

// refresh function
function refresh() {
  incompleteList.innerHTML = "";
  completeList.innerHTML = "";
  for (let i = 0; i < todoItems.length; i++) {
    const items = document.createElement("li");
    items.classList.add("list-group-item");
    const checkbox = document.createElement("input");
    checkbox.classList.add("form-check-input");
    checkbox.type = "checkbox";
    items.appendChild(checkbox);
    const label = document.createElement("label");
    label.innerText = todoItems[i]["title"];
    label.classList.add("form-check-label", "ps-3");
    items.appendChild(label);
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.classList.add("remove", "ms-2");
    items.appendChild(removeButton);
    if (todoItems[i]["completed"]) {
      completeList.appendChild(items);
      checkbox.checked = true;
    } else {
      incompleteList.appendChild(items);
    }
  }

  const checkboxForm = document.querySelectorAll(".form-check-input");
  for (let i = 0; i < checkboxForm.length; i++) {
    checkboxForm[i].addEventListener("change", (e) => {
      // console.log(checkboxForm[i].nextElementSibling.innerText)
      for (let j = 0; j < todoItems.length; j++) {
        // console.log(todoItems[j])
        if (
          checkboxForm[i].nextElementSibling.innerText ==
            todoItems[j]["title"] &&
          checkboxForm[i].checked
        ) {
          // console.log(todoItems[j]['title'])
          todoItems[j]["completed"] = true;
        } else if (
          checkboxForm[i].nextElementSibling.innerText ==
            todoItems[j]["title"] &&
          checkboxForm[i].checked == false
        ) {
          todoItems[j]["completed"] = false;
        }
      }
      refresh();
    });
  }
  
  const removeButtons = document.querySelectorAll(".remove");
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", (e) => {
      // console.log(removeButtons[i].previousElementSibling.innerText)
      for (let j = 0; j < todoItems.length; j++) {
        if (
          removeButtons[i].previousElementSibling.innerText ==
          todoItems[j]["title"]
        ) {
          removeIndex = todoItems.indexOf(todoItems[j])
          todoItems.splice(removeIndex,1);
        }
      }
      refresh();
    });
  }
}

refresh();

// adding new todo items
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newToDo = {
    id: todoItems.length + 1,
    title: inputForm.value,
    completed: false,
  };
  todoItems.push(newToDo);
  todoForm.reset()
  // console.log(todoItems)
  for (let i = 0; i < todoItems.length; i++) {
    if (i == todoItems.length - 1) {
      const items = document.createElement("li");
      items.classList.add("list-group-item");
      const checkbox = document.createElement("input");
      checkbox.classList.add("form-check-input");
      checkbox.type = "checkbox";
      items.appendChild(checkbox);
      const label = document.createElement("label");
      label.innerText = todoItems[i]["title"];
      label.classList.add("form-check-label", "ps-3");
      items.appendChild(label);
      const removeButton = document.createElement("button");
      removeButton.innerText = "remove";
      removeButton.classList.add("remove", "ms-2");
      items.appendChild(removeButton);
      if (todoItems[i]["completed"]) {
        completeList.appendChild(items);
        checkbox.checked = true;
      } else {
        incompleteList.appendChild(items);
      }
    }
  }

  const checkboxForm = document.querySelectorAll(".form-check-input");
  for (let i = 0; i < checkboxForm.length; i++) {
    checkboxForm[i].addEventListener("change", (e) => {
      // console.log(checkboxForm[i].nextElementSibling.innerText)
      for (let j = 0; j < todoItems.length; j++) {
        // console.log(todoItems[j])
        if (
          checkboxForm[i].nextElementSibling.innerText ==
            todoItems[j]["title"] &&
          checkboxForm[i].checked
        ) {
          // console.log(todoItems[j]['title'])
          todoItems[j]["completed"] = true;
        } else if (
          checkboxForm[i].nextElementSibling.innerText ==
            todoItems[j]["title"] &&
          checkboxForm[i].checked == false
        ) {
          todoItems[j]["completed"] = false;
        }
      }
      refresh();
    });
  }

  const removeButtons = document.querySelectorAll(".remove");
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", (e) => {
      // console.log(removeButtons[i].previousElementSibling.innerText)
      for (let j = 0; j < todoItems.length; j++) {
        if (
          removeButtons[i].previousElementSibling.innerText ==
          todoItems[j]["title"]
        ) {
          removeIndex = todoItems.indexOf(todoItems[j])
          todoItems.splice(removeIndex,1);
        }
        refresh();
      }
    });
  }
});

// const checkboxForm = document.querySelectorAll(".form-check-input");
// for (let i = 0; i < checkboxForm.length; i++) {
//   checkboxForm[i].addEventListener("change", (e) => {
//     // console.log(checkboxForm[i].nextElementSibling.innerText)
//     for (let j = 0; j < todoItems.length; j++) {
//       // console.log(todoItems[j])
//       if (
//         checkboxForm[i].nextElementSibling.innerText == todoItems[j]["title"] &&
//         checkboxForm[i].checked
//       ) {
//         // console.log(todoItems[j]['title'])
//         todoItems[j]["completed"] = true;
//       } else if (
//         checkboxForm[i].nextElementSibling.innerText == todoItems[j]["title"] &&
//         checkboxForm[i].checked == false
//       ) {
//         todoItems[j]["completed"] = false;
//       }
//     }
//     refresh();
//   });
// }

// const removeButtons = document.querySelectorAll(".remove");
// for (let i = 0; i < removeButtons.length; i++) {
//   removeButtons[i].addEventListener("click", (e) => {
//     // console.log(removeButtons[i].previousElementSibling.innerText)
//     for (let j = 0; j < todoItems.length; j++) {
//       if (
//         removeButtons[i].previousElementSibling.innerText ==
//         todoItems[j]["title"]
//       ) {
//         todoItems.pop(todoItems[j]);
//       }
//       refresh();
//     }
//   });
// }