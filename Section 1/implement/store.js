let state = {
    list: [],
    user : void 0,
}
const listners = [];

const reducer = (prevState, action) => {

        switch(action.type){
            case 'CREATE_LIST' : 
                    return [ ...prevState, action.payload];
            case 'REMOVE_ITEM' :
                    return [ ...prevState.filter(i =>  i.id !== action.payload.id)];
            default : 
                return prevState;
        }

}

const dispatch = (action) => {
    // calc
    state = calc(state,action);
    listners.forEach( l => l());

}

const calc = (prevState,action) => {
    return {
        list: reducer(prevState.list, action)
    };
}

const subscribe = (listner) => {
    listners.push(listner);
}

const select = (fn) => {
    return fn(state);
}

module.exports= {
    dispatch,
    subscribe,
    select

}