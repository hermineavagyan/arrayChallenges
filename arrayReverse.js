function reverse(arr) {
    var newArray = []
    for (var i = arr.length -1; i >=0; i--){
        newArray.push(arr[i])
    }
    arr = newArray
   return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]