import { Observable } from 'apollo-link';

/**
 * have to remove
 */
export const promiseToObservable = promise =>
  // @ts-ignore
  new Observable((subscriber) => {
    promise.then(
      (value) => {
        if (subscriber.closed) return;
        subscriber.next(value);
        subscriber.complete();
      },
      err => subscriber.error('err')
    );
    return subscriber;
  });
