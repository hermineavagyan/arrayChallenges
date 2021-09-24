function alwaysHungry(arr) {
    var newArray = []
    for (var i = 0; i <= arr.length; i++){
        if(arr[i] == "food"){
            
            newArray.push("yummy")       
        }
        else if(!arr.includes("food")){
            console.log("I am hungry")
        }
    }
    console.log(newArray)
  
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"