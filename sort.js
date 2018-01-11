module.exports = function(){

  function quickSort(arr){
    let left = [];
    let right = [];

    let pivot = arr[arr.length - 1];
    //base case
    if(arr.length < 1){
      //sortedArray = left.concat(right);
      return arr;
    }

    for(let i = 0; i < arr.length; i++){
      if(arr[i] < pivot && arr[i] !== undefined){
        left.push(arr[i]);
      }else if(arr[i] > pivot && arr[i] !== undefined){
        right.push(arr[i]);
      }
    }
    let leftArr = quickSort(left);
    let rightArr = quickSort(right);
    let sorted = leftArr.concat(pivot,rightArr);
    return sorted;
  }

  // function quickSort(arr,left,right){
  //   let len = arr.length;
  //   let pivot;
  //   let partitionIndex;
  //   if(left < right){
  //     pivot = right;
  //     partitionIndex = partition(arr,pivot,left,right);

  //     //sort left & right
  //     quickSort(arr,left,partitionIndex - 1);
  //     quickSort(arr, partitionIndex + 1, right)
  //   }
  //   return arr;
  // }
  // function partition(arr,pivot,left,right){
  //   let pivotValue = arr[pivot]
  //   let partitionIndex = left;

  //   for(let i = left; i < right; i++){
  //     if(arr[i] < pivotValue){
  //       swap(arr,i,partitionIndex);
  //       partitionIndex++;
  //     }
  //   }
  //   swap(arr,right,partitionIndex);
  //   return partitionIndex;
  // }
  // function swap(arr, indexA, indexB){
  //   let temp = arr[indexA];
  //   arr[indexA] = arr[indexB];
  //   arr[indexB] = temp;
  // }

  function mergeSort(arr){

  }

  return {
    quickSort: quickSort,
    mergeSort: mergeSort,
  }

}


