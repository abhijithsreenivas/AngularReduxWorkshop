const { select, subscribe, dispatch} = require('./store');

class  ListView{
    constructor(){
        //select data
        this.list = select((state) => state.list);
        console.log('list', this.list);
        // subscribe
        subscribe(this.update.bind(this));
    }

    update() {
        console.log('updated');
        // refetch data
        this.list = select((state) => state.list);
        console.log('Updated List', this.list);

    }

     remove(index) {
        const action = { type : 'REMOVE_ITEM', payload: { id: index}};
        dispatch(action);
    }
}

const list = new ListView();
module.export = list;