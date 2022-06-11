// Selectors
const btn = document.getElementById("todo-button")
const todoInput = document.getElementById("todo-input")
const todoUI = document.getElementById("todo-ul")

// JSON.parse(localStorage.getItem("todos")) yoksa [] yap
let todos = JSON.parse(localStorage.getItem("todos")) || []

renderSavedTodos();

function renderSavedTodos(){
    todos.forEach((todo)=>{
    createListElement(todo)
})
}

function createListElement(todo){
    
        // her bir todo objesini destructure yaptık
        const{id,content,isDone} = todo
    todoUI.innerHTML += 
    // isDone varsa checked'ı class'a gönder. yoksa gönderme
    `
    <li id=${id} class=${isDone ? "checked" : ""}>
        <i class="fa fa-check"></i>
        <p>${content}</p>
        <i class="fa fa-trash"></i>
    </li>`
}

// başlangiçta input'A focus olsun
window.onload = function(){
    todoInput.focus()
}

btn.addEventListener("click",()=>{
    if(!todoInput.value){
        alert("Please enter your todo")
    }else{

        // localStorage eklenecek object format
        const todoObject = {
            id: new Date().getTime(),
            isDone:false,
            content:todoInput.value
        }
        // yeni oluşturulan todo'yu diziye sakla
        todos.push(todoObject)

        localStorage.setItem("todos",JSON.stringify(todos))

       createListElement(todoObject)
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
    const id = e.target.parentElement.getAttribute("id")
    if(e.target.classList.contains("fa-trash")){
        // todos'dan silme
        todos = todos.filter((todo)=> todo.id != id)
        // localden silme ve güncelleme
        localStorage.setItem("todos",JSON.stringify(todos))
        
        // DOM'dan silme
        e.target.parentElement.remove()
    }

    if(e.target.classList.contains("fa-check")){
        if(e.target.parentElement.classList.contains("checked")){
            // todos dizisindeki ilgili elementin isDone kısmını güncelle
            todos.map((todo,index)=>{
                if(todo.id == id){
                    todos[index].isDone =!todos[index].isDone
                }
            })
        localStorage.setItem("todos",JSON.stringify(todos))

            
            e.target.parentElement.classList.remove("checked")

        }else{
            e.target.parentElement.classList.add("checked")
        }
    }
})