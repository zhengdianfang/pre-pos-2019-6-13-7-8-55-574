'use strict';

function createUpdatedCollection(collectionA, objectB) {
   const resultArray = [...collectionA];
   resultArray.forEach(element => {
      if(objectB.value.includes(element.key)) {
        element.count -= 1;
      }
   });
   return resultArray;
}
