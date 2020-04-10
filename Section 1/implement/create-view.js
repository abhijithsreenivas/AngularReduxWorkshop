const { dispatch } = require('./store');
counter = 1;

class CreateView{
    constructor(){

    }

    save() {
        const data = this.getTextInput();
        // create action 
        const action = {type : 'CREATE_LIST', payload : { id : counter++ , title: data}};

        // dispatch
        dispatch(action);
    }

    getTextInput(){
        // since this is running in nodeJS I am hiding the below code and return a data value.
        //return document.getElementById('input').value; 
        return 'data';
    }
}

const view = new CreateView();
module.exports = view;