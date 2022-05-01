// You can access the 'todoItems' variable from the 'data.js' file, so long as 'data.js'
// comes before 'script.js' in the HTML document
console.log(todoItems)

// Use the 'todoItems' variable to create the appropriate elements and append them onto
// the page.

// incomplete items
const incompleteList = document.querySelector('#incomplete-items')
const completeList = document.querySelector('#complete-items')

for (let i=0;i < todoItems.length; i++) {
    const items = document.createElement('li')
    items.classList.add('list-group-item')
    const checkbox = document.createElement('input')
    checkbox.classList.add('form-check-input')
    checkbox.type = 'checkbox'
    items.appendChild(checkbox)
    const label = document.createElement('label')
    label.innerText = todoItems[i]["title"]
    label.classList.add('form-check-label', 'ps-3')
    items.appendChild(label)
    if (todoItems[i]["completed"]) {
        completeList.appendChild(items)
        checkbox.id = 'flexCheckChecked'
        checkbox.setAttribute('checked','')
    } else {
        incompleteList.appendChild(items)
        checkbox.id = 'flexCheckDefault'
    }
}
