
const { Observable } = require('rxjs');
const stream$ = new Observable(observer => {
    observer.next(1);
    observer.next(1);
});

stream$.subscribe(data => console.log('data',data));

const streamPromise$ = new Observable(observer => {
    const promise = new Promise(resolve =>{
        setTimeout(()=>{
            resolve('data');
        },3000)
    });

    promise.then(data => observer.next(data));
});

streamPromise$.subscribe(data => console.log('from promise',data))