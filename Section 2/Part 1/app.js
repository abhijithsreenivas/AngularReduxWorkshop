

const { of, interval, take } = require('rxjs');

const stream$ = of(1,2,3);
stream$.subscribe(data => console.log('data',data));

const intervalStream$ = interval(1000);
const subscription = intervalStream$.subscribe(data => console.log('interval stream', data));

setTimeout(() =>{
        subscription.unsubscribe();
},3012);