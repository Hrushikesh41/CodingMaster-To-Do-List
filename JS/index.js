console.log("Hello World");

displayNote = () => {
    let showNote = localStorage.getItem('showNote');
    if (showNote == null) {
        listObj = [];
    } else {
        listObj = JSON.parse(showNote);
    }

    let html = ""
    listObj.forEach(function(element, index) {
        html += `
        <div class="showItem">
                <div class="noteBody">
                    <h2>Note ${index +1}</h2>
                    <p>${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="deleteBtn"><i class="fa fa-trash-o fa-2x"></i></button>
                </div>
            </div>
    `;
    });
    let listElem = document.querySelector('.showNote');

    if (listObj.length != 0) {
        listElem.innerHTML = html;
    } else {
        listElem.innerHTML = `<h1>Nothing to show right now. To see something add a note</h1>`;
    }
}
displayNote();
let times = () => {
    let showTime = document.querySelector("#showTime");

    const time = new Date();
    const day = new Date();

    if (day.getDay() == 1) {
        if (time.getSeconds() < 10 && time.getMinutes() >= 10) {
            showTime.innerHTML = time.getHours() + " : " + time.getMinutes() + " : " + " 0" + time.getSeconds() + " " + " Mon";
        } else if (time.getSeconds() < 10 && time.getMinutes() < 10) {
            showTime.innerHTML = time.getHours() + " : " + " 0" + time.getMinutes() + " : " + " 0" + time.getSeconds() + " " + " Mon";
        } else if (time.getMinutes() < 10 && time.getSeconds() > 10) {
            showTime.innerHTML = time.getHours() + " : " + " 0" + time.getMinutes() + " : " + time.getSeconds() + " " + " Mon";
        } else {
            showTime.innerHTML = time.getHours() + " : " + time.getMinutes() + " : " + time.getSeconds() + " " + " Mon";
        }
    } else if (day.getDay() == 2) {
        if (time.getSeconds() < 10 && time.getMinutes() >= 10) {
            showTime.innerHTML = time.getHours() + " : " + time.getMinutes() + " : " + " 0" + time.getSeconds() + " " + " Tues";
        } else if (time.getSeconds() < 10 && time.getMinutes() < 10) {
            showTime.innerHTML = time.getHours() + " : " + " 0" + time.getMinutes() + " : " + " 0" + time.getSeconds() + " " + " Tues";
        } else if (time.getMinutes() < 10 && time.getSeconds() > 10) {
            showTime.innerHTML = time.getHours() + " : " + " 0" + time.getMinutes() + " : " + time.getSeconds() + " " + " Tues";
        } else {
            showTime.innerHTML = time.getHours() + " : " + time.getMinutes() + " : " + time.getSeconds() + " " + " Tues";
        }
    } else if (day.getDay() == 3) {
        if (time.getSeconds() < 10 && time.getMinutes() >= 10) {
            showTime.innerHTML = time.getHours() + " : " + time.getMinutes() + " : " + " 0" + time.getSeconds() + " " + " Wed";
        } else if (time.getSeconds() < 10 && time.getMinutes() < 10) {
            showTime.innerHTML = time.getHours() + " : " + " 0" + time.getMinutes() + " : " + " 0" + time.getSeconds() + " " + " Wed";
        } else if (time.getMinutes() < 10 && time.getSeconds() > 10) {
            showTime.innerHTML = time.getHours() + " : " + " 0" + time.getMinutes() + " : " + time.getSeconds() + " " + " Wed";
        } else {
            showTime.innerHTML = time.getHours() + " : " + time.getMinutes() + " : " + time.getSeconds() + " " + " Wed";
        }
    } else if (day.getDay() == 4) {
        if (time.getSeconds() < 10 && time.getMinutes() >= 10) {
            showTime.innerHTML = time.getHours() + " : " + time.getMinutes() + " : " + " 0" + time.getSeconds() + " " + " Thurs";
        } else if (time.getSeconds() < 10 && time.getMinutes() < 10) {
            showTime.innerHTML = time.getHours() + " : " + " 0" + time.getMinutes() + " : " + " 0" + time.getSeconds() + " " + " Thurs";
        } else if (time.getMinutes() < 10 && time.getSeconds() > 10) {
            showTime.innerHTML = time.getHours() + " : " + " 0" + time.getMinutes() + " : " + time.getSeconds() + " " + " Thurs";
        } else {
            showTime.innerHTML = time.getHours() + " : " + time.getMinutes() + " : " + time.getSeconds() + " " + " Thurs";
        }
    } else if (day.getDay() == 5) {
        if (time.getSeconds() < 10 && time.getMinutes() >= 10) {
            showTime.innerHTML = time.getHours() + " : " + time.getMinutes() + " : " + " 0" + time.getSeconds() + " " + " Fri";
        } else if (time.getSeconds() < 10 && time.getMinutes() < 10) {
            showTime.innerHTML = time.getHours() + " : " + " 0" + time.getMinutes() + " : " + " 0" + time.getSeconds() + " " + " Fri";
        } else if (time.getMinutes() < 10 && time.getSeconds() > 10) {
            showTime.innerHTML = time.getHours() + " : " + " 0" + time.getMinutes() + " : " + time.getSeconds() + " " + " Fri";
        } else {
            showTime.innerHTML = time.getHours() + " : " + time.getMinutes() + " : " + time.getSeconds() + " " + " Fri";
        }
    } else if (day.getDay() == 6) {
        if (time.getSeconds() < 10 && time.getMinutes() >= 10) {
            showTime.innerHTML = time.getHours() + " : " + time.getMinutes() + " : " + " 0" + time.getSeconds() + " " + " Sat";
        } else if (time.getSeconds() < 10 && time.getMinutes() < 10) {
            showTime.innerHTML = time.getHours() + " : " + " 0" + time.getMinutes() + " : " + " 0" + time.getSeconds() + " " + " Sat";
        } else if (time.getMinutes() < 10 && time.getSeconds() > 10) {
            showTime.innerHTML = time.getHours() + " : " + " 0" + time.getMinutes() + " : " + time.getSeconds() + " " + " Sat";
        } else {
            showTime.innerHTML = time.getHours() + " : " + time.getMinutes() + " : " + time.getSeconds() + " " + " Sat";
        }
    } else {
        if (time.getSeconds() < 10 && time.getMinutes() >= 10) {
            showTime.innerHTML = time.getHours() + " : " + time.getMinutes() + " : " + " 0" + time.getSeconds() + " " + " Sun";
        } else if (time.getSeconds() < 10 && time.getMinutes() < 10) {
            showTime.innerHTML = time.getHours() + " : " + " 0" + time.getMinutes() + " : " + " 0" + time.getSeconds() + " " + " Sun";
        } else if (time.getMinutes() < 10 && time.getSeconds() > 10) {
            showTime.innerHTML = time.getHours() + " : " + " 0" + time.getMinutes() + " : " + time.getSeconds() + " " + " Sun";
        } else {
            showTime.innerHTML = time.getHours() + " : " + time.getMinutes() + " : " + time.getSeconds() + " " + " Sun";
        }
    }
}

let dayTime = setInterval(times, 1000);

let createBtn = document.getElementById('createBtn');
let deleteBtn = document.getElementsByClassName('deleteBtn');
let addText = document.getElementById("notes");
let addNote = document.getElementById('addNote');
let cancelNote = document.getElementById("cancelNote");

createBtn.addEventListener("click", function(e) {
    addText.classList.add("note");
    addNote.classList.add("add");
    cancelNote.classList.add("cancel");
    addText.style.display = "block";
    addNote.style.display = "block";
    cancelNote.style.display = "block";
});

cancelNote.addEventListener("click", function(m) {
    addText.style.display = "none";
    addNote.style.display = "none";
    cancelNote.style.display = "none";

});

addNote.addEventListener("click", function(n) {
    let showNote = localStorage.getItem('showNote');
    if (showNote == null) {
        listObj = [];
    } else {
        listObj = JSON.parse(showNote);
    }
    listObj.push(addText.value);
    localStorage.setItem("showNote", JSON.stringify(listObj))
    addText.value = "";
    console.log(showNote);

    displayNote();
});

displayNote = () => {
    let showNote = localStorage.getItem('showNote');
    if (showNote == null) {
        listObj = [];
    } else {
        listObj = JSON.parse(showNote);
    }

    let html = ""
    listObj.forEach(function(element, index) {
        html += `
        <div class="showItem">
                <div class="noteBody">
                    <h2>Note ${index +1}</h2>
                    <p>${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="deleteBtn"><i class="fa fa-trash-o fa-2x"></i></button>
                </div>
            </div>
    `;
    });
    let listElem = document.querySelector('.showNote');

    if (listObj.length != 0) {
        listElem.innerHTML = html;
    } else {
        listElem.innerHTML = `<h1>Nothing to show right now. To see something add a note</h1>`;
    }
}

deleteNote = (index) => {
    console.log("I am deleting");
    let showNote = localStorage.getItem('showNote');
    if (showNote == null) {
        listObj = [];
    } else {
        listObj = JSON.parse(showNote);
    }

    listObj.splice(index, 1);
    localStorage.setItem('showNote', JSON.stringify(listObj));
    displayNote();
}