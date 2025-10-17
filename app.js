var userInput = document.getElementById("usertext");

function add() {
  if (userInput.value === "") {
    alert("Empty Input");
  } else {
    var todoList = document.getElementById("list");
    var liElement = document.createElement("li");
    var liText = document.createTextNode(userInput.value);
    liElement.appendChild(liText);
    todoList.appendChild(liElement);

    // delete button

    var delBtn = document.createElement("but");
    var del = document.createTextNode("Del");

    delBtn.appendChild(del);

    delBtn.setAttribute("onclick", "deleteSingleItem(this)");

    liElement.appendChild(delBtn);
         delBtn.style.color = "black";
    delBtn.style.backgroundColor = "cyan";
    delBtn.style.marginLeft = "3pc";
    delBtn.style.borderRadius = "20px";
         delBtn.style.paddingLeft = "20px";
          delBtn.style.fontSize = "20px";
           delBtn.style.padding = "0.5pc";
     delBtn.style.paddingRight= "20px";
     delBtn.style.boxShadow = "0 0 20px aqua";
    
liElement.style.color= "white"
liElement.style.fontSize= "40px"
liElement.style.backgroundColor= "black"
    // Edit button

    var editBtnElement = document.createElement("button");
    var editBtnText = document.createTextNode("Edit");

    editBtnElement.appendChild(editBtnText);

    editBtnElement.setAttribute("onclick", "editSingleItem(this)");
   editBtnElement.style.backgroundColor = "yellow";
   editBtnElement.style.color = "black";
    editBtnElement.style.boxShadow = "0 0 20px yellow";

    liElement.appendChild(editBtnElement);

    userInput.value = "";
  }
  console.log(liElement);
}

function deleteAll() {
  var list = document.getElementById("list");

  list.innerHTML = "";
}

function deleteSingleItem(btn) {
  btn.parentNode.remove();
}

function editSingleItem(btn) {
  var updatedValue = prompt("enter updated Value");

  btn.parentNode.childNodes[0].data = updatedValue;
}
