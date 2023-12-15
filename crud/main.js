let kitchenInput = document.getElementById('kitchen-input');
let addBtn = document.getElementById('add-btn');
let kitchenItemsList = document.getElementById('kitchen-items-list');


function addKitchenItems(){
    let kitchenInputData = kitchenInput.value;
    
    let li = document.createElement("li");
    li.innerText = kitchenInputData;
    li.style.cssText = "animation-name: slideIn;";
    kitchenItemsList.appendChild(li);
    kitchenInput.value = '';
    kitchenInput.focus();

    let trashBtn = document.createElement("i");
    trashBtn.classList.add("fas","fa-trash");
    li.appendChild(trashBtn);
    console.log(trashBtn);
}

function deleteKitchenItem(event){
    if(event.target.classList[0] === "fas"){
        let item = event.target.parentElement;
        item.classList.add("slideOut");
        item.addEventListener("transitionend",function(){
            item.remove();
        })
    }
}

addBtn.addEventListener("click",addKitchenItems);
kitchenItemsList.addEventListener("click",deleteKitchenItem);