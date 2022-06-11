// Selectors
const btn = document.getElementById("todo-button")
const todoInput = document.getElementById("todo-input")
const todoUI = document.getElementById("todo-ul")

// başlangiçta input'A focus olsun
window.onload = function(){
    todoInput.focus()
}

btn.addEventListener("click",(e)=>{
    if(!todoInput.value){
        alert("Please enter your todo")
    }else{

        todoUI.innerHTML += `
        <li>
        <i class="fa fa-check"></i>
        <p>${todoInput.value}</p>
        <i class="fa fa-trash"></i>
        </li>`
        todoInput.value=""
    }
    })

todoInput.addEventListener("keydown",(e)=>{
    // inputta iken enter'a tıklayınca btn.click() fonk çağır.
    if(e.key==="Enter"){
        btn.click()
    }
})

// delete ve enter tuşuna basilmasi ile add butonunun click fonk çağırılması
todoUI.addEventListener("click",(e)=>{
    if(e.target.classList.contains("fa-trash")){
        e.target.parentElement.remove()
    }
    if(e.target.classList.contains("fa-check")){
        if(e.target.parentElement.classList.contains("checked")){
            e.target.parentElement.classList.remove("checked")
        }else{
            e.target.parentElement.classList.add("checked")
        }
    }
})