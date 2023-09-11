let addBtn = document.getElementById("add-btn")
let deleteBtn = document.getElementById("delete-btn")
let input = document.getElementById("input")
let tasks = []
let list = document.getElementById("list")
let warning = document.getElementById("warning")

let lsTasks = localStorage.getItem("tasks")



warning.style.display = "none"
if (lsTasks) {
  tasks = JSON.parse(lsTasks)
  render(tasks)
}



function render(arr) {
  let taskText = ""
  for (let i = 0; i < arr.length; i++) {
    
    taskText += `<li class="item">${arr[i]}</li>`
    
  }
  list.innerHTML = taskText
  input.value = ""
}

function addItem() {
  
  if (input.value !== "")  {
    
    tasks.push(input.value)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    
    render(tasks)
    warning.style.display = "none"
  } else {
    warning.style.display = "initial"
    warning.textContent = "Please enter a task"
  }
}

function deleteItem() {
  
    tasks.shift()
    localStorage.setItem("tasks", JSON.stringify(tasks))
    render(tasks)
    warning.style.display = "none"

    
    if (list.innerHTML === "") {
      warning.style.display = "initial"
      warning.textContent = "You have no tasks to clear"
    
  }

}



warning.addEventListener("click", () => {
  warning.style.display = "none"
})



addBtn.addEventListener("click", addItem)
deleteBtn.addEventListener("click", deleteItem)