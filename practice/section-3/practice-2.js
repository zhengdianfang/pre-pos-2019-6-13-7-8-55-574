'use strict';

function createUpdatedCollection(collectionA, objectB) {
   const resultArray = [...collectionA];
   resultArray.forEach(element=> {
      if(objectB.value.includes(element.key)) {
        const temp = parseInt(element.count / 3);
        element.count -= temp;
      }
   });

  return resultArray;
}
