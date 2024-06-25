let appendToDoButton = document.getElementById('appendToDo');


let toDoContainer = document.getElementById('toDoList');


let inputField = document.getElementById('inputField');

appendToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('li')

    paragraph.innerText = inputField.value;

    paragraph.classList.add('list_styling')

    toDoContainer.appendChild(paragraph);

    inputField.value = "";
    
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})