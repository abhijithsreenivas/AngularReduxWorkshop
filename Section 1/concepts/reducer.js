// reducer 


function reducer(prevState, action){
    switch(action.type){
        case 'CREATE_ITEM':
                return [...prevState, {...action.payload}];
        default :
                return prevState;

    }
}


let state = reducer([],{type : 'CREATE_ITEM', payload: {title : 'new Item1'}});
state = reducer(state,{type : 'CREATE_ITEM', payload: {title : 'new Item2'}});

console.log('state',state);