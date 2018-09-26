module.exports = function getLoveTrianglesCount(preferences = []) {
  preferences.unshift('move');
  let count = 0;
  let indexArr = [];
  for(let firstIndex = 1; firstIndex < preferences.length;) {
    if(!indexArr.includes(firstIndex)) {
      let secondIndex = preferences[firstIndex];
      let thirdIndex = preferences[secondIndex];
      let result = preferences[thirdIndex];
      if (result === firstIndex && firstIndex !== secondIndex) {
        indexArr.push(firstIndex, secondIndex, thirdIndex);
        count+=1;
      }
    }
    firstIndex+=1;
  }
  return count;
};

