var getInp = document.getElementById("inp")
var getUl = document.getElementById("ul")

function addToDo(){
    var getInp = document.getElementById("inp")
    var createLi = document.createElement("li")
    var liText = document.createTextNode(getInp.value)
    createLi.appendChild(liText)
    getUl.appendChild(createLi)
    getInp.value = " "
    localStorage.setItem("addToDo", getUl.querySelector("li").innerHTML )
  
    var delBtn = document.createElement("button")
     var delBtnText = document.createTextNode("delete")
    delBtn.appendChild(delBtnText)
    createLi.appendChild(delBtn)
    delBtn.setAttribute("onclick" , "del(this)")
    var editBtn = document.createElement("button")
     var editBtnText = document.createTextNode("edit")
    editBtn.appendChild(editBtnText)
    createLi.appendChild(editBtn)
    editBtn.setAttribute("onclick" , "edit(this)")

   
    
}
function clearAll(){
    getUl.innerHTML = " "
    
    
    
}
function del (abc) {
    abc.parentNode.remove()
}
function edit (xyz) {
    getProm = prompt("Edit to-do item please: ")
    selectedLi = xyz.parentNode
    selectedLi.firstChild.nodeValue= getProm

}
