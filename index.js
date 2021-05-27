var typeNote = document.querySelector(".typenote input");
var plusNote = document.querySelector(".plusnote button");
var remainingTask = document.querySelector("span.remainingno");
var todos = document.querySelector(".tasks");

var listArr= [];

plusNote.onclick = () =>{
    var inputFinal = typeNote.value;
    if(inputFinal.length===0){
        window.alert("You must add something!");
    }
    var localStorageData = localStorage.getItem("new todo");
    if (localStorageData == null) {
        listArr= [];        
    }
    else{
        listArr=JSON.parse(localStorageData);
    }
    listArr.push(inputFinal);
    localStorage.setItem("new todo",JSON.stringify(listArr));
    if(inputFinal.length!=0){
    showItem();
    }
}
function showItem(){
    var localStorageData = localStorage.getItem("new todo");
    if (localStorageData == null) {
        listArr= [];        
    }
    else{
        listArr=JSON.parse(localStorageData);
    }
    var newTask = "";
    listArr.forEach((element,index)=>{
        newTask+= `<li>${element} <span  onclick = "deleteLi(${index})"><i class="fa fa-trash" aria-hidden="true"></i> </span>`;
    })
    todos.innerHTML = newTask;
    typeNote.value = "";
    plusNote.classList.remove("active");
    listLen();
    console.log("item added");
}
function listLen(){
    remainingTask.textContent = listArr.length;
}
function deleteLi(index){
    var localStorageData = localStorage.getItem("new todo");
    listArr=JSON.parse(localStorageData);
    listArr.splice(index,1);
    localStorage.setItem("new todo",JSON.stringify(listArr));
    showItem();
    listLen(); 
}
function impLi(index){
    var boxBorder = document.querySelector(".tasks li");
    boxBorder.style.backgroundColor = "#FE5F55";
    listArr.find(index).style.backgroundColor = "#FE5F55";
}
