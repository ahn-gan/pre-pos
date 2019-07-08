'use strict';

function createUpdatedCollection(collectionA, objectB) {
  // collectionA => 对象数组
  let elementMap = new Map();
  collectionA.forEach(item => {
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

  // 减去与 objectB.value 相同的元素(满3 - 1)
  let bArray = objectB.value;
  bArray.forEach(element => {
    result = result.map(item => {
      if (element == item.key && item.count >= 3) {
        item.count = item.count - parseInt(item.count / 3);
      }
      return item;
    });
  });
  return result;
}
