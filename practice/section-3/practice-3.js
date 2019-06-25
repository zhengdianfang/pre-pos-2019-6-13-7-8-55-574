'use strict';

function countSameElements(collection) {
  const resultArray = [];
  collection.forEach(element => {
     const findObj = resultArray.find(item => item.key === element);
     if (findObj) {
       findObj.count += 1;
     } else {
       resultArray.push({ key: element, count: 1});
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
