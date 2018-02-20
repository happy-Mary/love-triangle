/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  preferences.unshift('move');
  let count = 0;
  let indexArr = [];
  for(let firstIndex = 1; firstIndex < preferences.length;) {
    if(indexArr.includes(firstIndex)) {
      firstIndex+=1;
    } else {
      let secondIndex = preferences[firstIndex];
      let thirdIndex = preferences[secondIndex];
      let result = preferences[thirdIndex];
      if (result === firstIndex) {
        indexArr.push(firstIndex);
        indexArr.push(secondIndex);
        indexArr.push(thirdIndex);
        count+=1;
        firstIndex+=1;
      } else {
        firstIndex+=1;
      }
    }
  }
  return count;
};

// let arr = ['h', 2, 3, 1, 5, 6, 4, 8, 9, 7, 11, 12, 10, 13, 9, 13, 2, 15, 13, 12, 11];
// let secondIndex = preferences[firstIndex];
//     let thirdIndex = preferences[secondIndex];
//     let result = preferences[thirdIndex];
//     if (result === firstIndex) {
//       firstIndex += 3;
//       count+=1;
//     } else {
//       firstIndex += 3;
//     }
