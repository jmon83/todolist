class ajaxRequest {
    constructor() {
        this.type = '';
        this.url = '';
        this.data = {};
        this.datatype = 'json';
    }
    success(response) {
        }
    error(response) {
        }
}

const postItem = (itemTodo, successMsg, errorMsg) => {
    let newPostRequest;
    newPostRequest = new ajaxRequest();
    newPostRequest['type'] = 'POST';
    newPostRequest['url'] = '';
    newPostRequest['xhrFields'] = {'withCredentials': true};
    newPostRequest['data'] = {
        'task': {
            'content' : itemTodo
        }
    };
    newPostRequest['success'] = response => successMsg(response);
    newPostRequest['error'] = (request, anError) => errorMsg(request, anError);
    $.ajax(newPostRequest);
};

const activateItem = (id, successMsg, errorMsg) => {
    let newActivateRequest;
    newActivateRequest = new ajaxRequest();
    newActivateRequest['type'] = 'PUT';
    newActivateRequest['url'] = '';
    newActivateRequest['xhrFields'] = { 'withCredentials': true };
    newActivateRequest['success'] = response => successMsg(response);
    newActivateRequest['error'] = (request, anError) => errorMsg(request, anError);
    $.ajax(newActivateRequest);
};

const completeItem = (id, successMsg, errorMsg) => {
    let newCompleteRequest;
    newCompleteRequest = new ajaxRequest();
    newCompleteRequest['type'] = 'PUT';
    newCompleteRequest['url'] = '';
    newCompleteRequest['xhrFields'] = { 'withCredentials': true };
    newCompleteRequest['success'] = (response) => successMsg(response);
    newCompleteRequest['error'] = (request, anError) => errorMsg(request, anError);
    $.ajax(newCompleteRequest);
};

const getItems = (successMsg, errorMsg) => {
    let newGetRequest;
    newGetRequest = new ajaxRequest();
    newGetRequest['type'] = 'GET';
    newGetRequest['url'] = '';
    newGetRequest['xhrFields'] = { 'withCredentials': true };
    newGetRequest['success'] = (response) => successMsg(response);
    newGetRequest['error'] = (request, anError) => errorMsg(request, anError);
    $.ajax(newGetRequest);
};

const deleteItem = (id, successMsg, errorMsg) => {
    let newDeleteRequest;
    newDeleteRequest = new ajaxRequest();
    newDeleteRequest['type'] = 'DELETE';
    newDeleteRequest['url'] = '';
    newDeleteRequest['xhrFields'] = { 'withCredentials': true };
    newDeleteRequest['success'] = (response) => successMsg(response);
    newDeleteRequest['error'] = (request, anError) => errorMsg(request, anError);
    $.ajax(newDeleteRequest);
};

$(document).onload(() => {

    let input = $('#myInput');


});