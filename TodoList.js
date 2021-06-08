const from = document.getElementById("add");
const doList = document.getElementById("things");
from.addEventListener("change", addDo);
doList.addEventListener("click", removeDo);

function addDo(e) {
  //e.preventDefault();
  console.log("addDo");
  var newDo = document.getElementById("thing").value;

  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newDo));
  doList.appendChild(li);

  var delButton = document.createElement("button");
  delButton.className = "btn btn-danger btn-sm float-right delete";
  delButton.appendChild(document.createTextNode("delete"));
  li.appendChild(delButton);
  doList.appendChild(li);
}

function removeDo(e) {
  if (e.target.classList.contains("   delete")) {
    var li = e.target.parentElement;
    doList.removeChild(li);
  }
}
