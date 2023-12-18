let kitchenInput = document.getElementById('kitchen-input');
let addBtn = document.getElementById('add-btn');
let kitchenItemsList = document.getElementById('kitchen-items-list');

let kitchenInputData;

function setLocalStorage(){
    localStorage.setItem("kitchenInput",kitchenInputData);
}

function getLocalStorage(){
    if(localStorage.getItem("kitchenInput")){
        kitchenInputData = localStorage.getItem("kitchenInput");
        buildUI();
    }
    
}

function buildUI(){
    let li = document.createElement("li");
    let spanEl = document.createElement("span");
    li.appendChild(spanEl);
    spanEl.innerText = kitchenInputData;
    li.style.cssText = "animation-name: slideIn;";
    kitchenItemsList.appendChild(li);
    kitchenInput.value = '';
    kitchenInput.focus();

    let trashBtn = document.createElement("i");
    trashBtn.classList.add("fas","fa-trash");
    li.appendChild(trashBtn);
    console.log(trashBtn);

    let editBtn = document.createElement("i");
    editBtn.classList.add("fas","fa-edit");
    li.appendChild(editBtn);
}

function addKitchenItems(){
    kitchenInputData = kitchenInput.value;
    
    setLocalStorage();
    getLocalStorage();
    
    
}

function deleteKitchenItem(event){
    if(event.target.classList[1] === "fa-trash"){
        let item = event.target.parentElement;
        item.classList.add("slideOut");
        item.addEventListener("transitionend",function(){
            item.remove();
        })
    }
}

function editKitchenItem(event){
    if(event.target.classList[1] === "fa-edit"){
        let editedValue = prompt("Please add new text");
        let item = event.target.parentElement;

        let spanEl = item.querySelector("span");
        spanEl.innerText = editedValue;
        
    }
}

addBtn.addEventListener("click",addKitchenItems);
kitchenItemsList.addEventListener("click",deleteKitchenItem);
kitchenItemsList.addEventListener("click",editKitchenItem);

getLocalStorage();