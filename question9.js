function uniqueElements(arr1,arr2,uniqueArr) {
    for(var i=0; i<arr1.length; i++) {
        flag = 0;
        for(var j=0; j<arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                arr2.splice(j,1);
                j--;
                flag = 1;
            }
        }
  
        if(flag == 0) {
            uniqueArr.push(arr1[i]);
        }
    }
    uniqueArr.push(arr2);
    return uniqueArr;
}
  
var arr1 = [1,2,3,4,9];
  
var arr2 = [45,2,9,10];
  
var uniqueArr = [];
  
document.write("Unique elements in the two arrays are: ");
document.write(uniqueElements(arr1,arr2,uniqueArr).flat());