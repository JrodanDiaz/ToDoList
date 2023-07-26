const taskList = document.getElementById("task-list");
const userInput = document.getElementById("user-input");


taskList.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === "IMG"){
        e.target.parentElement.parentElement.remove();
        
    }
}, false);

document.addEventListener("keydown", function(e){
    if(userInput.value != '' && e.key === "Enter"){
        addItem();
    }
});


function addItem(){
    if (userInput.value === ''){
        alert("Input cannot be blank")
    } else {
    let li = document.createElement("li");
    li.innerHTML = userInput.value;
    taskList.appendChild(li);

    let span = document.createElement("span");
    li.appendChild(span);

    const removeImg = document.createElement("img");
    removeImg.src = "Public/images/iconmonstr-x-mark-lined-240.png"
    span.append(removeImg);
    

    
    }
    userInput.value = '';
}