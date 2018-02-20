/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  preferences.unshift('move');
  let count = 0;
  for(let firstIndex = 1; firstIndex < preferences.length;) {
    let secondIndex = preferences[firstIndex];
    let thirdIndex = preferences[secondIndex];
    if (preferences[thirdIndex] === firstIndex && secondIndex !== thirdIndex) {
      count += 1;
      firstIndex += 3;
    } else {
      firstIndex += 3;
    }
  }
  return count;
};

let arr = [2, 3, 1, 9, 8, 6, 3, 8, 1, 5];
