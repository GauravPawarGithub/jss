const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector(".addBtn");
const todoContainer = document.querySelector(".todoContainer");
let API = "https://686a544c2af1d945cea3cc33.mockapi.io/api/v1/todos"; //mockAPI project API
//taking inputvalue
addBtn.addEventListener("click", postData);

//Fetch API : GET functionalities
async function fetchData() {
  let response = await fetch(API); // response will be in JSON
  let data = await response.json(); //json to array of objects
  //display each obj(todo) when data is added
  if(data){ 
    todoContainer.innerHTML='';
    data.forEach((obj) => { 
      let div = document.createElement("div");
      div.className = "todo";
      div.innerHTML = `<p class="paraText">${obj.text}</p>
                    <input id="editInput" type="text" placeholder="Enter Your Task" value='${obj.text}'>
                    <div class="btns">
                        <button class='deleteBtn'>Delete</button>
                        <button class="editBtn">Edit</button>
                        <button class="saveBtn">Save</button>
                    </div>`;//also save button is added 
      todoContainer.append(div); 
      
      let editBtn = div.querySelector('.editBtn')
      let saveBtn = div.querySelector('.saveBtn')
      let editInput = div.querySelector("#editInput");
      let paraText = div.querySelector('.paraText')
      let deleteBtn = div.querySelector('.deleteBtn')//selecting class thorough element rather than document (apend krane k baad hi delete btn select kralo)
      deleteBtn.addEventListener('click', ()=>{
        deleteData(obj.id)
      })
      editBtn.addEventListener('click', ()=>{
        
        editBtn.style.display = 'none';
        saveBtn.style.display = 'inline';
        paraText.style.display = 'none';
        editInput.style.display = 'inline';
        
      })
      saveBtn.addEventListener("click", () => {
        let editValue = editInput.value;
        updateData(obj.id, editValue)

        saveBtn.style.display = "none";
        editBtn.style.display = "inline";
        paraText.style.display = 'inline';
        editInput.style.display = 'none';
      });      
    });
  }
}

//POST functionalities

async function postData() {
  let value = taskInput.value;

  let objData = {
    text: value.trim(),
  };

  let response = await fetch(API, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    //backend(mockapi) generates ID (  only deal with text)
    body: JSON.stringify(objData),
  });
  if (response.status === 201) {
    fetchData();
    taskInput.value = "";
  }
}
fetchData();

//Delete function
async function deleteData(id) {
  let response = await fetch(`${API}/${id}`, {
    method : 'DELETE',
  })
  if(response.status === 200){
    fetchData();
  }
}+

async function updateData(id) {
  let value = taskInput.value;

  let objData = {
    text: value.trim(),
  };

  let response = await fetch(`${API}, ${id}`,{
    method: "PUT",
    headers: {
      "content-Type": "application/json",
    },
    //backend(mockapi) generates ID ( we only deal with text)
    body: JSON.stringify(objData),
  });
  return response;
}
fetchData();
