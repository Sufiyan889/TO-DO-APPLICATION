var firebaseConfig = {
  apiKey: "AIzaSyBZ-DwqStt8sGfxv4IHtP7Vr72YLp4t2_A",
  authDomain: "to-do-app-f86d1.firebaseapp.com",
  projectId: "to-do-app-f86d1",
  storageBucket: "to-do-app-f86d1.firebasestorage.app",
  messagingSenderId: "273140178313",
  appId: "1:273140178313:web:c3418660caaee478519558",
  measurementId: "G-M6BWY1B620",
  databaseURL: "https://to-do-app-f86d1-default-rtdb.firebaseio.com/"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.database();

function add() {
  var userInput = document.getElementById("usertext");
  if (userInput.value === "") {
    alert("Please enter a task!");
    return;
  }
else{
  var todoList = document.getElementById("list");
  var liElement = document.createElement("li");
  var liText = document.createTextNode(userInput.value);
  liElement.appendChild(liText);
  todoList.appendChild(liElement);

  var users = {
    USER_TEXT: userInput.value,
    USERT_EDIT: ""
  };
  var ref = db.ref("USER_INPUT").push(users);
  var key = ref.key;
  liElement.setAttribute("data-key", key);

  liElement.style.position = "relative";
  liElement.style.margin = "15px auto";
  liElement.style.width = "70%";
  liElement.style.padding = "20px 30px";
  liElement.style.borderRadius = "20px";
  liElement.style.display = "flex";
  liElement.style.justifyContent = "space-between";
  liElement.style.alignItems = "center";
  liElement.style.color = "#fff";
  liElement.style.fontSize = "1.2rem";
  liElement.style.fontWeight = "500";
  liElement.style.background = "rgba(255,255,255,0.05)";
  liElement.style.border = "1px solid rgba(255,0,255,0.4)";
  liElement.style.boxShadow = "0 0 20px rgba(255,0,255,0.3)";
  liElement.style.backdropFilter = "blur(6px)";
  liElement.style.transition = "0.3s";

  liElement.onmouseover = function () {
    liElement.style.transform = "translateY(-5px)";
    liElement.style.boxShadow = "0 0 30px rgba(255,0,255,0.6)";
  };

  liElement.onmouseout = function () {
    liElement.style.transform = "translateY(0)";
    liElement.style.boxShadow = "0 0 20px rgba(255,0,255,0.3)";
  };

  // delete button
  var delBtn = document.createElement("button");
  delBtn.textContent = "DELETE";
  delBtn.onclick = function () {
    deleteSingleItem(this);
  };

  delBtn.style.background = "transparent";
  delBtn.style.color = "#ff0040";
  delBtn.style.border = "2px solid #ff0040";
  delBtn.style.borderRadius = "12px";
  delBtn.style.padding = "8px 16px";
  delBtn.style.cursor = "pointer";
  delBtn.style.fontSize = "0.9rem";
  delBtn.style.fontWeight = "600";
  delBtn.style.transition = "0.3s";
  delBtn.style.boxShadow = "0 0 10px #ff004055";

  delBtn.onmouseover = function () {
    delBtn.style.background = "#ff0040";
    delBtn.style.color = "#000";
    delBtn.style.boxShadow = "0 0 20px #ff0040";
    delBtn.style.transform = "scale(1.1)";
  };

  delBtn.onmouseout = function () {
    delBtn.style.background = "transparent";
    delBtn.style.color = "#ff0040";
    delBtn.style.boxShadow = "0 0 10px #ff004055";
    delBtn.style.transform = "scale(1)";
  };

  var editBtn = document.createElement("button");
  editBtn.textContent = "EDIT";
  editBtn.onclick = function () {
    editSingleItem(this);
  };

  editBtn.style.background = "transparent";
  editBtn.style.color = "#00ffff";
  editBtn.style.border = "2px solid #00ffff";
  editBtn.style.borderRadius = "12px";
  editBtn.style.padding = "8px 16px";
  editBtn.style.cursor = "pointer";
  editBtn.style.fontSize = "0.9rem";
  editBtn.style.fontWeight = "600";
  editBtn.style.transition = "0.3s";
  editBtn.style.boxShadow = "0 0 10px #00ffff55";

  editBtn.onmouseover = function () {
    editBtn.style.background = "#00ffff";
    editBtn.style.color = "#000";
    editBtn.style.boxShadow = "0 0 20px #00ffff";
    editBtn.style.transform = "scale(1.1)";
  };

  editBtn.onmouseout = function () {
    editBtn.style.background = "transparent";
    editBtn.style.color = "#00ffff";
    editBtn.style.boxShadow = "0 0 10px #00ffff55";
    editBtn.style.transform = "scale(1)";
  };

  var btnBox = document.createElement("div");
  btnBox.style.display = "flex";
  btnBox.style.gap = "10px";
  btnBox.appendChild(editBtn);
  btnBox.appendChild(delBtn);

  liElement.appendChild(btnBox);
  userInput.value = "";
}
function deleteAll() {
  document.getElementById("list").innerHTML = "";
  db.ref("USER_INPUT").remove();
}
function deleteSingleItem(btn) {
  var li = btn.parentNode.parentNode;
  var key = li.getAttribute("data-key");
  db.ref("USER_INPUT/" + key).remove();
  li.remove();
}

function editSingleItem(btn) {
  var li = btn.parentNode.parentNode;
  var key = li.getAttribute("data-key");
  var oldValue = li.firstChild.data;
  var updatedVal = prompt("Enter updated value:", oldValue);
  if (!updatedVal) return;
  li.firstChild.data = updatedVal;
  db.ref("USER_INPUT/" + key).update({ USERT_EDIT: updatedVal });
}
}
