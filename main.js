function addNewList() {
    alert('hello world!');
}

function addListItem() {
    const list = document.getElementById("grocery-list");
    const itemInput = document.getElementById("new-list-item");
    const newItem= document.createElement("li");
    newItem.appendChild(document.createTextNode(itemInput.value));
    list.appendChild(newItem);
}