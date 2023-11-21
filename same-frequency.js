// add whatever parameters you deem necessary
function sameFrequency(n1, n2) {
  let str1 = n1.toString();
  let str2 = n2.toString();

  if (str1.length !== str2.length) {
    return false;
  }
  let count1 = {};
  let count2 = {};
  for (let i = 0; i < str1.length; i++) {
    count1[str1[i]] = (count1[str1[i]] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    count2[str2[i]] = (count2[str2[i]] || 0) + 1;
  }
  for (let key in count1) {
    if (count1[key] !== count2[key]) return false;
  }
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
