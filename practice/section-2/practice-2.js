'use strict';

function countSameElements(collection) {
  let elementMap = new Map();
  collection.forEach(item => {
    let count = 0;
    let regExp = /[0-9]/;
    if (regExp.test(item)) {
      // 分割
      let spiltItem = item.split('-');
      count = (elementMap.get(spiltItem[0]) === undefined) ? parseInt(spiltItem[1]) : elementMap.get(item) + parseInt(spiltItem[1]);
      elementMap.set(spiltItem[0], count);
    } else {
      count = (elementMap.get(item) === undefined) ? 1 : elementMap.get(item) + 1;
      elementMap.set(item, count);
    }
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
