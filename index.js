   
    let inputTask = document.getElementById("input-task");
    let btnLoad = document.getElementById("btn-load");
    let listTask = document.getElementById("list-task");
    
    
    function addTask(){
         let task = inputTask.value.trim();
         if(task != ""){
            let newTask = document.createElement("li");
            newTask.classList.add("list-group-item");
            newTask.textContent = task;
            listTask.appendChild(newTask);
            inputTask.value = "";
         }
        }

    btnLoad.addEventListener ("click", addTask);

    inputTask.addEventListener ("keypress", function(event){
        if (event.key == "Enter"){
            addTask();
        }
    });

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
