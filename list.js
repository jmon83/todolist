let theList = document.getElementById('theList');
let hideComplete = false;
//On Load call
function loadTheList() {
    $.ajax({
        type: 'GET',
        url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=202',
        dataType: 'json',
        success: function (response, textStatus) {
            response.tasks.forEach(function (task){
                console.log(task.content, task.id, task.completed)
                buildTheTaskList(task.content, task.id, task.completed)
            })
        },
        error: function (request, textStatus, errorMessage) {
            console.log(errorMessage);
        }
    });
}
//Add task to list call
function addtTotheList(newValue) {
    $.ajax({
        type: 'POST',
        url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=202',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({
            task: {
                content: newValue
            }
        }),
        success: function (response, textStatus) {
            loadTheList();
        },
        error: function (request, textStatus, errorMessage) {
            console.log(errorMessage);
        }
    });
}
//Build the task list
function buildTheTaskList(content, id, completed) {
    let newItem = theList.insertRow(0);
    let newItemValue = newItem.insertCell(0);
    newItemValue.innerHTML = `${content}`;
    let removeBtn = document.createElement('span');
    removeBtn.id = `${id}`
    let modBtn = document.createElement('span');
    modBtn.id = `${id}`
    if (completed === true && hideComplete === true){
        newItemValue.style["display"] = "none";
    }
    if (completed === false){
        modBtn.setAttribute('class','active');
        newItemValue.setAttribute('class','notDone');
    } else {
        modBtn.setAttribute('class','complete');
        newItemValue.setAttribute('class','done');
    }
    removeBtn.setAttribute('class','close');
    removeBtn.innerHTML = "×";
    newItemValue.appendChild(removeBtn);
    modBtn.innerHTML = "&#10003;\n";
    newItemValue.appendChild(modBtn)
    updateToggle();
}
//Delete a task call
function deleteATask(id) {
    $.ajax({
        type: 'DELETE',
        url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks/' + `${id}`+ '?api_key=202',
        success: function (response, textStatus) {
            console.log(response);
            loadTheList();
        },
        error: function (request, textStatus, errorMessage) {
            console.log(errorMessage);
        }
    });
}
//Sort task
$(document).on('click', '.theCompleteSort', function () {
    theList.innerHTML = '';
    hideComplete = !hideComplete;
    loadTheList();
});
//Mark as complete
$(document).on('click', '.active', function () {
    theList.innerHTML = '';
    setAsComplete(`${this.id}`);
});
//Mark as complete call
function setAsComplete(id) {
    $.ajax({
        type: 'PUT',
        url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks/' + `${id}` + '/mark_complete?api_key=202',
        dataType: 'json',
        success: function (response, textStatus) {
            loadTheList();
        },
        error: function (request, textStatus, errorMessage) {
            console.log(errorMessage);
        }
    });
}
//Mark as active
$(document).on('click', '.complete', function () {
    theList.innerHTML = '';
    setAsActive(`${this.id}`);
});
//mark as active call
function setAsActive(id) {
    $.ajax({
        type: 'PUT',
        url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks/' + `${id}` + '/mark_active?api_key=202',
        dataType: 'json',
        success: function (response, textStatus) {
            loadTheList();
        },
        error: function (request, textStatus, errorMessage) {
            console.log(errorMessage);
        }
    });
}
//Delete individual task
$(document).on('click', '.close', function () {
    theList.innerHTML = '';
    deleteATask(`${this.id}`);
});
//create new task button
function newElement(){
    theList.innerHTML = '';
    let newValue = document.getElementById('myInput').value;
    addtTotheList(newValue);
    }
//Toggle Button Functions
let updateToggle = () => {
    let tFoot = document.getElementById('tFoot');
    tFoot.innerHTML = "";
    let sortButton = document.createElement('span');
if (hideComplete === true){
    sortButton.setAttribute('class', 'theCompleteSort');
    sortButton.innerHTML = "Show All";
    tFoot.appendChild(sortButton);
} else {
    sortButton.setAttribute('class', 'theCompleteSort');
    sortButton.innerHTML = "Hide Completed";
    tFoot.appendChild(sortButton);
}};
//Load the list on page load
$(document).ready(function() {
    loadTheList();
});
