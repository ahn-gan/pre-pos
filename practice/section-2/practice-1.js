'use strict';

function countSameElements(collection) {
  let elementMap = new Map();
  collection.forEach(item => {
    let count = (elementMap.get(item) == undefined) ? 1 : elementMap.get(item) + 1;
    elementMap.set(item, count);
  });
  let result = [];
  elementMap.forEach((value, key) => {
    let item = {
      key: key,
      count: value
    };
    result.push(item);
  });
  return result;
}
