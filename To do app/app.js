let button = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

button.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = input.value;

    // Create and add delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";
    deleteButton.classList.add("delete");
    
   

    // Create and add edit button
    let editButton = document.createElement("button");
    editButton.innerText = "edit";
    editButton.classList.add("edit");

    
    item.appendChild(editButton);
    item.appendChild(deleteButton);
    ul.appendChild(item);
    input.value = "";
});

ul.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        
        if (event.target.classList.contains("delete")) {
            listItem.remove();
        } else if (event.target.classList.contains("edit")) {
            let newText = prompt("Edit your list:", listItem.firstChild.nodeValue);
            if (newText !== null) {
                listItem.firstChild.nodeValue = newText;
            }
        }
    }
});
