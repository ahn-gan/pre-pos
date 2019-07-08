'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let reduceArray = objectB['value'];
  let result;
  reduceArray.forEach(element => {
    result = collectionA.map(item => {
      if (element == item.key) {
        item.count = item.count - 1;
      }
      return item;
    });
  });
  return result;
}
