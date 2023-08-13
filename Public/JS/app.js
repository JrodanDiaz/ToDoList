const taskList = document.getElementById("task-list");
const userInput = document.getElementById("user-input");
const submitButton = document.getElementById("submit-btn");


taskList.addEventListener("click", (e) => {

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === "IMG"){
        e.target.parentElement.parentElement.remove();
        
    }
}, false);

//NOTE: REMOVED THE ()PARENTHESES FROM  addItem BELOW VVV

submitButton.addEventListener("click", addItem);

document.addEventListener("keydown", (e) => {
    if(userInput.value != '' && e.key === "Enter"){
        addItem;
    }
});


function addItem(){
    if (userInput.value === ''){
        alert(`UserInput: ${userInput.value}  Input cannot be blank`);
    } else {
    let li = document.createElement("li");
    li.innerHTML = userInput.value;
    taskList.appendChild(li);
    alert(`UserInput: ${userInput.value}`);

    let span = document.createElement("span");
    li.appendChild(span);

    const removeImg = document.createElement("img");
    removeImg.src = "images/iconmonstr-x-mark-lined-240.png"
    span.append(removeImg);
    
    }
    // userInput.value = '';
}
