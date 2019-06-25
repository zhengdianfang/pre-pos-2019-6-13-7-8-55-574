'use strict';

function parseElement(element) {
  const regax = /[a-z0-9]+/g;
  const matchRes = element.match(regax);
  if (matchRes.length === 2) {
    return { key: matchRes[0], count: parseInt(matchRes[1])}
  }
  return { key : matchRes[0], count: 1 };
}

function countSameElements(collection) {
  const resultArray = [];
  collection.forEach(element => {
      const parsedItem = parseElement(element);
      const findObj = resultArray.find(item => item.key === parsedItem.key);
      if (findObj) {
        findObj.count = findObj.count + parsedItem.count;
      } else {
        resultArray.push(parsedItem);
      }
  });
  return resultArray;
}


function createUpdatedCollection(collectionA, objectB) {
    const resultArray = countSameElements(collectionA);
    resultArray.forEach(element => {
        if(objectB.value.includes(element.key)) {
          const temp = parseInt(element.count / 3);
          element.count -= temp;
        }
    });
    return resultArray;
}
