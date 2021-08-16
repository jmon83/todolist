 document.addEventListener('DOMContentLoaded', 
 function() {

     var theList = documnent.getElementById('theList');
     var theInput = document.getElementById('theInput');
     var addButton = document.getElementById('addButton');
     var theCount = 0;

     var addToDoItem = function() {
         var toDoCol = document.createElement('div');
         toDoCol.setAttribute('class', 'col-sm-8 thingsToDo');
         toDoRow.setAttribute('class', 'row');
         var removeToDo = document.createElement('button');
         removeButton.setAttribute('class', 'btn btn-danger remove-button');
         removeButton.innerHTML = "Done!";

         removeButton.onClick = function() {
             var child = this.parentNode.parentNode;
             theList.removeChild(child);
         };

    var h5 = document.createElement('h5');
    h5.setAttribute('class', 'col-sm-6');
    h5.innerHTML = theInput.value;
    toDoRow.appendChild(h5);
    toDoRow.appendChild(removeButton);
    toDoCol.appendChild(toDoRow);
    theList.appendChild(toDoCol);
     };

    var checkTheToDo = function() {
        if (theCount < 10 && theInput.value !== '') {
            addToDoItem();
            theCount++;
            theInput.value = '';
        }
    }
    addButton.addEventListener('click', checkTheToDo);

    theInput.addEventListener('keyup', function(event) {
        if (event.key === "Enter") {
            checkTheToDo();
        }
    });
 });
