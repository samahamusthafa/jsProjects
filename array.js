// let array = [];
// let lists = document.getElementById("lists");

// function addItem(){
//     let itemInput = document.getElementById("itemInput");
//     let newItemValue = itemInput.value;

//     array.push(newItemValue);

//     for(let values of array){
        
//         let allLi = document.createElement("li");
//         allLi.innerText = values;
        
//         lists.appendChild(allLi);
//         console.log(allLi);
//     }
    


    
// }
// let addItemBtn = document.getElementById("addItemBtn");
//     addItemBtn.addEventListener("click",addItem);

    let array = [1,2,3,5];
    array.forEach(function(values,index){
         console.log(values,index);
    })