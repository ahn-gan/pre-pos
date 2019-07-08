'use strict';

function countSameElements(collection) {
  let elementMap = new Map();
  collection.forEach(item => {
    let count = 0;
    // 使用正则表达式判断字符串是否包含数字
    let regExp = /[0-9]/;
    if (regExp.test(item)) {
      // 包含数字则取出数字
      let keyCount = parseInt(item.replace(/[^0-9]/ig,''));
      // 取出key
      let key = item.substr(0, 1);
      count = (elementMap.get(key) === undefined) ? keyCount : elementMap.get(key) + keyCount;
      elementMap.set(key, count);
    } else {
      count = (elementMap.get(item) === undefined) ? 1 : elementMap.get(item) + 1;
      elementMap.set(item, count);
    }
  });
  let result = [];
  elementMap.forEach((value, key) => {
    let item = {
      name: key,
      summary: value
    };
    result.push(item);
  });
  return result;
}
