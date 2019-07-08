'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let reduceArray = objectB['value'];
  let result;
  reduceArray.forEach(element => {
    result = collectionA.map(item => {
      if (element == item.key && item.count >= 3) {
        item.count = item.count - parseInt(item.count / 3);
      }
      return item;
    });
  });
  console.log(result);
  return result;
}
