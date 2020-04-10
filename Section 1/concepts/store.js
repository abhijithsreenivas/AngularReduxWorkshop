// store

state = {
    list : [],
    user : void 0,
}

let listners = [];

//dispatch

const dispatch = (action) => {
    listners.forEach(element => {
        element();
    });
}

// select
const select = (fn) => fn(state);

function selector(state){
    return state.list;
}

//subscribe 
const subscribe = (listner) => {
    listners.push(listner);
}