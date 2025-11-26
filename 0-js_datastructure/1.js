// write a function that take two arrayes , arr1 = [1,2,3,1],arr2=[4,9,1,1] basically arr2 contain arr1 all ele squre even duplicate ele

function squireCheck(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let indexOfEle = arr2.indexOf(arr1[i] ** 2);
    if (indexOfEle === -1) {
      return false;
    }
    arr2.splice(indexOfEle, 1);
  }
  return true;
}
console.log(squireCheck([1, 1, 2, 3], [1, 9, 1, 4]));
