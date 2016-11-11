
import * as Rx from 'rxjs/Rx';
import * as RSVP from 'rsvp';


// var source = Rx.Observable.create(observer => {
//   // Yield a single value and complete
//   observer.next(42);
//   observer.complete();

//   // Any cleanup logic might go here
//   return () => console.log('disposed')
// });

// var subscription = source.subscribe(
//   x => console.log('onNext: %s', x),
//   e => console.log('onError: %s', e),
//   () => console.log('onCompleted'));

// subscription.unsubscribe();




// var source = Rx.Observable.range(1, 5);

// // Prints out each item
// var subscription = source.subscribe(
//   x => console.log('onNext: %s', x),
//   e => console.log('onError: %s', e),
//   () => console.log('onCompleted'));




//  var source = Rx.Observable.range(1, 5);

// // Create observer
// var observer = Rx.Subscriber.create(
//   x => console.log('onNext: %s', x),
//   e => console.log('onError: %s', e),
//   () => console.log('onCompleted'));

// // Prints out each item
// var subscription = source.subscribe(observer);




//timer
// console.log('Current time: ' + Date.now());

// var source = Rx.Observable.timer(
//   5000, /* 5 seconds */
//   1000 /* 1 second */)
//    .timestamp();

// var subscription = source.subscribe(
//   x => console.log(x.value + ': ' + x.timestamp));



// iterables array set map
//  var array = [1,2,3,4,5];

// // Converts an array to an observable sequence
// var source = Rx.Observable.from(array);

// // Prints out each item
// var subscription = source.subscribe(
//   x => console.log('onNext: %s', x),
//   e => console.log('onError: %s', e),
//   () => console.log('onCompleted'));


// DOM events
// var result = document.getElementById('result');

// var source = Rx.Observable.fromEvent(document, 'mousemove');

// var subscription = source.subscribe(e => result.innerHTML = e.clientX + ', ' + e.clientY);



// Bridging to Promises
// var source = Rx.Observable.range(0, 3)
//   .flatMap(x => Promise.resolve(x * x));

// var subscription = source.subscribe(
//   x => console.log('onNext: %s', x),
//   e => console.log('onError: %s', e),
//   () => console.log('onCompleted'));



// Promises to Observable Sequences
// var promise1 = new RSVP.Promise((resolve, reject) => resolve(42));

// var source1 = Rx.Observable.fromPromise(promise1);

// var subscription1 = source1.subscribe(
//   x => console.log('onNext: %s', x),
//   e => console.log('onError: %s', e),
//   () => console.log('onCompleted'));

// // => onNext: 42
// // => onCompleted

// // Create a promise which rejects with an error
// var promise2 = new RSVP.Promise((resolve, reject) => reject(new Error('customed reason')));

// var source2 = Rx.Observable.fromPromise(promise2);

// var subscription2 = source2.subscribe(
//   x => console.log('onNext: %s', x),
//   e => console.log('onError: %s', e),
//   () => console.log('onCompleted'));



// Converting Observable Sequences to Promises
// var source1 = Rx.Observable.of(1).toPromise(RSVP.Promise);

// source1.then(
//   value => console.log('Resolved value: %s', value),
//   reason => console.log('Rejected reason: %s', reason));

// // => Resolved value: 1



// Combing different sequences
// var source1 = Rx.Observable.range(1, 3);
// var source2 = Rx.Observable.range(1, 3);

// source1.concat(source2)
//    .subscribe(
//         x => console.log('onNext: %s', x),
//         e => console.log('onError: %s', e),
//         () => console.log('onCompleted'));

// //In this case, if source1 completes without any error, then source2 will not start. Therefore, if you run the following sample code, you will get 1,2,3 only since source2 (which produces 4,5,6) is ignored.
// source1.catch(source2)
//    .subscribe(console.log.bind(console));




//This onErrorResumeNext operator will move on to source2 even if source1 cannot be completed due to an error. 
// var source1 = Rx.Observable.throw(new Error('An error has occurred.'));
// var source2 = Rx.Observable.range(1, 3);

// source1.onErrorResumeNext(source2)
//    .subscribe(console.log.bind(console));



//Projection
//map operator can translate each element of an observable sequence into another form.
// var array = ['Reactive', 'Extensions', 'RxJS'];

// var seqString = Rx.Observable.from(array);

// var seqNum = seqString.map(x => x.length);

// seqNum
//    .subscribe(console.log.bind(console));




//  var source1 = Rx.Observable.range(2,3,4,5,6).filter(n => n<=5).map( (x) => x);
//  var subscription1 = source1.subscribe(console.log.bind(console))
//  var seq = Rx.Observable.generate(
//     0,
//     i => i < 10,
//     i => i + 1,
//     i => i * i);

// var source = seq.filter(n => n < 5);

// var subscription = source1.subscribe(
//   x => console.log('onNext: %s', x),
//   e => console.log('onError: %s', e.message),
//   () => console.log('onCompleted'));



// var source = Rx.Observable.catch(
//   Rx.Observable.of(42),
//   Rx.Observable.throw(new Error()),
//   Rx.Observable.of(56),
//   Rx.Observable.throw(new Error()),
//   Rx.Observable.of(78)
// );

// var subscription = source.subscribe(
//   data => console.log(data)
// );




// var source = Rx.Observable.onErrorResumeNext(
//   Rx.Observable.of(42),
//   Rx.Observable.throw(new Error()),
//   Rx.Observable.of(56),
//   Rx.Observable.throw(new Error()),
//   Rx.Observable.of(78)
// );

// var subscription = source.subscribe(
//   data => console.log(data)
// );




// subject class inherits both Observable and Observer, in the sense that it is both an observer and an observable. You can use a subject to subscribe all the observers, and then subscribe the subject to a backend data source. In this way, the subject can act as a proxy for a group of subscribers and a source. You can use subjects to implement a custom observable with caching, buffering and time shifting. In addition, you can use subjects to broadcast data to multiple subscribers.
// var subject = new Rx.Subject();

// var subscription = subject.subscribe(
//     x => console.log('onNext: ' + x),
//     e => console.log('onError: ' + e.message),
//     () => console.log('onCompleted'));

// subject.next(1);
// // => onNext: 1

// subject.next(2);
// // => onNext: 2

// subject.complete();
// // => onCompleted

// subscription.unsubscribe();





// var source = Rx.Observable.interval(1000);

// var subject = new Rx.Subject();

// var subSource = source.subscribe(subject);

// var subSubject1 = subject.subscribe(
//     x => console.log('Value published to observer #1: ' + x),
//     e => console.log('onError: ' + e.message),
//     () => console.log('onCompleted'));

// var subSubject2 = subject.subscribe(
    // x => console.log('Value published to observer #2: ' + x),
    // e => console.log('onError: ' + e.message),
    // () => console.log('onCompleted'));

// setTimeout(() => {
//     // Clean up
//     subject.complete();
//     subSubject1.unsubscribe();
//     subSubject2.unsubscribe();
// }, 5000);



//test
// var seq1 = Rx.Observable.interval(1000)
//    .do(console.log.bind(console))
//    .bufferCount(5)
//    .do(x => console.log('buffer is full'))
//    .subscribe(
//        x => console.log('Sum of the buffer is ' + x.reduce((acc, x) => acc + x, 0)),
//        e => console.log('onError: ' + e.message),
//        () => console.log('onCompleted')
//     );
//    setTimeout(() =>
//     seq1.complete(),
//     9000
//    )




