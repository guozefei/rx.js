// var Rx = require('rxjs/Rx');
import * as Rx from 'rxjs/Rx';


var source = Rx.Observable.create(observer => {
  // Yield a single value and complete
  observer.next(42);
  observer.complete();

  // Any cleanup logic might go here
  return () => console.log('disposed')
});

var subscription = source.subscribe(
  x => console.log('onNext: %s', x),
  e => console.log('onError: %s', e),
  () => console.log('onCompleted'));

subscription.unsubscribe();

// var source = Rx.Observable.range(1, 5);

// // Prints out each item
// var subscription = source.subscribe(
//   x => console.log('onNext: %s', x),
//   e => console.log('onError: %s', e),
//   () => console.log('onCompleted'));