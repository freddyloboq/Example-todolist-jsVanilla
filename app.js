const inputTodoList = document.querySelector("#exampleFormControlInput1");
let valueOfInput = ''

inputTodoList.addEventListener("change", (event)=>{
  console.log('event.target.value :>> ', event.target.value);
  valueOfInput = event.target.value
})

const containerList = document.querySelector("ul")

const deleteInput = (e)=>{
  e.target.remove()
}

inputTodoList.addEventListener("keydown", (event)=>{
  if (event.target.value == '') return

  if(event.keyCode === 13){
    const li = document.createElement("li")
    li.addEventListener("click", deleteInput);
    li.textContent = event.target.value
    containerList.appendChild(li)
    event.target.value = ''
  }
})