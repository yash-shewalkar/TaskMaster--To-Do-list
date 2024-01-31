const inputTask =document.getElementById("task_input");
const list_item =document.getElementById("list_content");

function addIt(){
        if(inputTask.value =='') //if there is nothing typed
        {
            alert("You must enter a task");
        }
        else{
            let li = document.createElement("li");
            li.innerHTML = inputTask.value; //give the input text value to the li and append it
            list_item.appendChild(li);   
            //creating a cross icon using the code \u00d7 
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            //display span tag 
            li.appendChild(span);

        }
        
        inputTask.value ="";
        saveTask();
}

list_item.addEventListener('click',function(e){
    if(e.target.tagName ==="LI")
    {
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if(e.target.tagName ==="SPAN")
    {
        e.target.parentElement.remove();
        saveTask();
    }


    
},false);

//save function
function saveTask()
{
    localStorage.setItem("data",list_item.innerHTML);
}
//show the data 
function showTask()
{
    list_item.innerHTML = localStorage.getItem("data"); 
}
showTask();

  const add = document.querySelector(".addBtn");


document.addEventListener("keydown" , function(event){
        
    if(event.code == "Enter")
    {
        addIt();
        
    }
})