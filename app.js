var usertext = document.getElementById("usertext");
 function add(){
if(usertext.value === ""){
alert("EMPTY TEXT... KINDLY FILL IT")
}
else{
var list = document.getElementById("list")
var liele = document.createElement("li");
var litext  = document.createTextNode(usertext.value);
liele.appendChild(litext);
list.appendChild(liele)
usertext.value = ""
liele.style.color = 'black'
liele.style.fontFamily = 'sans-sarif'
liele.style.fontWeight = 'bold'
liele.style.borderRadius = '10pc'
liele.style.marginLeft = '15pc'
liele.style.marginRight = '15pc'
liele.style.fontSize = '40px'
liele.style.marginTop = '2pc'
liele.style.backgroundColor = 'rgba(0, 184, 0, 1)'
list.style.backgroundColor = 'black'
}
 }