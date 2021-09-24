function betterThanAverage(arr) {
    var sum = 0;
    
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    console.log("the sum is " + sum)

    var average = sum/arr.length
    // calculate the average
    console.log(" the average is " + average)
    var count = 0
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > average){
            count++
        }
        
    }
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log( " The count is " + result); // we expect back 4