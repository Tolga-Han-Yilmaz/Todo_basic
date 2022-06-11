const btn = document.getElementById("todo-button")
const todoInput = document.getElementById("todo-input")
const todoUI = document.getElementById("todo-ul")

window.onload = function(){
    todoInput.focus()
}

btn.addEventListener("click",(e)=>{
todoUI.innerHTML += `
<li>
    <i class="fa fa-check"></i>
    <p>${todoInput.value}</p>
    <i class="fa fa-trash"></i>
</li>`
todoInput.value=""
})

todoInput.addEventListener("keydown",(e)=>{
    // inputta iken enter'a tıklayınca btn.click() fonk çağır.
    if(e.key==="Enter"){
        btn.click()
    }
})