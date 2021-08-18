 document.addEventListener('DOMContentLoaded', 
 function () {

     var theList = document.getElementById('theList');
     var theInput = document.getElementById('theInput');
     var addButton = document.getElementById('addButton');
     var theCount = 0;

     var addToDoItem = function() {
         var toDoCol = document.createElement('div');
         toDoCol.setAttribute('class', 'col-xs-12 thingsToDo');
         var toDoRow = document.createElement('div');
         toDoRow.setAttribute('class', 'row');
         var removeButton = document.createElement('button');
         removeButton.setAttribute('class', 'btn btn-danger remove-button');
         removeButton.innerHTML = "X";
         removeButton.onclick = function () {
             var child = this.parentNode.parentNode;
             theList.removeChild(child);
         };

    var h5 = document.createElement('h5');
    h5.setAttribute('class', 'col-xs-8');
    h5.innerHTML = theInput.value;
    toDoRow.appendChild(h5);
    toDoRow.appendChild(removeButton);
    toDoCol.appendChild(toDoRow);
    theList.appendChild(toDoCol);
     };

    var checkTheToDo = function () {
        if (theCount < 10 && theInput.value !== '') {
            addToDoItem();
            theCount++;
            theInput.value = '';
        }
    }
    addButton.addEventListener('click', checkTheToDo);

    theInput.addEventListener('keyup', function (event) {
        if (event.key === "Enter") {
            checkTheToDo();
        }
    });
 });
