const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');


// Adding a task
let addTask = ()=> {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
};

// Press enter key to add a task
document.addEventListener("keydown", ()=> {
    if (event.key === "Enter") {
        addTask();
    }
});


// When clicked on the task it gets checked & plays a sound
listContainer.addEventListener("click", (dtls)=> {
    console.log(dtls);
    if (dtls.target.tagName === "LI") {
        dtls.target.classList.toggle("checked");

        // Plays the sound when clicked
        dtls.target.addEventListener("click", ()=> {
            clickSound.play();
        })

        // Saves the deta in the local storage
        saveData()
    } else if (dtls.target.tagName === "SPAN") {
        dtls.target.parentElement.remove();
        saveData();
    }
}, false);


// Function to get saved data from local storage
let saveData = ()=> {
    localStorage.setItem("tasks", listContainer.innerHTML);
};

// Saves the data inside the local storage
let showTasks = ()=> {
    listContainer.innerHTML = localStorage.getItem("tasks");
}
showTasks();


// Clicking audio
const clickSound = new Audio();
clickSound.src = 'sounds/to do sound effect.mp3';
