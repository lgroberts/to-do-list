

function saveItem() {
    var listItem = document.getElementById("enter").value;
    console.log(listItem);
    return listItem;
}

function addItem(listItem) {
    var listItem = saveItem();
    let fullList = document.querySelector("#list");
    var newItem = document.createElement("li");
    newItem.innerHTML = listItem;
    fullList.appendChild(newItem);
    document.getElementById("enter").value = "";
}