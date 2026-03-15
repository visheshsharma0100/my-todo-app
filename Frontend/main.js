const token = localStorage.getItem("token");
if (!token) {
    window.location.href = "signin.html";  
}
async function AddTodo() {
    const inputVal = document.getElementById("input").value;
    
    if (!inputVal.trim()) return;

    await axios.post("http://localhost:3000/notes", { note: inputVal }, {
        headers: { token: localStorage.getItem("token") }  
    });

    const newNode = document.createElement("div");
    newNode.innerText = inputVal;
    newNode.setAttribute('class', 'todo-item');
    document.getElementById('Left_All_todos').appendChild(newNode);

    document.getElementById("input").value = "";
}

async function getTodos() {
    const response = await axios.get("http://localhost:3000/notes",{
        headers:{
            token:localStorage.getItem("token")
        }
    });
    const notes = response.data.usernote;

    document.getElementById("Left_All_todos").innerHTML = "";

    for (let i = 0; i < notes.length; i++) {   
        const newNote = document.createElement("div");
        newNote.innerText = notes[i].note;
        newNote.setAttribute('class', 'todo-item');
        document.getElementById("Left_All_todos").appendChild(newNote);
    }
}

getTodos();