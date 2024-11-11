const list = [1, 2, 3, 2, 3, 10, 5, 3, 1, 2, "php", "javascript", "python", "php", "java", "php", "ruby", "python"];
// const list2=[1,2,2,3,3,4]
console.log(list);

// using filter function
function removeDuplicates(array) {
  return array.filter((el, index) => array.indexOf(el) === index);
}

console.log(removeDuplicates(list));    