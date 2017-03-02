function bubbleSort(arr) { //[3,2,1]
  let sorted = [];
  if (arr.length) {
  for ( let i = 0; i < arr.length - 1; i++) {
    if(isNaN(arr[i])) return;
    if (arr[i] > arr[i + 1 ] ) {
      let temp = arr[i + 1]; //2
      arr[i + 1 ] = arr[i]; //3
      arr[i] = temp; //2
    } //[2,3,1] [2,1,3]
  }
  sorted.push(arr[arr.length - 1]);
  console.log('arr', arr, 'sorted', sorted);
  return (bubbleSort(arr.slice(0, arr.length - 1)).concat(sorted));
  } else {return sorted;}
}
