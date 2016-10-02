////------------------------------------------------------------------
// TASK 1 : Build a function that returns an array of strings with last names added:
//    If less than 6 characters, append Sampson: e.g. "Homer Sampson"
//    If 6 characters or longer, append Simpson: 'Jessica Simpson'
////------------------------------------------------------------------

var simpList = [
    "Homer",
    "OJ",
    "Marge",
    "Jessica",
    "Bart",
    "Maggie"
]
//INPUT: String (?)
var simpOrSamp = function(arrOfString) {

    var resultsArray = []


  for (var i = 0; i < arrOfString.length; i = i + 1){
      	 var newSimpList = ""
      if (arrOfString[i].length < 6) {
          newSimpList = arrOfString[i] + " Sampson"


      } else {
           newSimpList = arrOfString[i] + " Simpson"
      }

      resultsArray.push(newSimpList)

  }
  //OUTPUT:Array 
    return resultsArray
 }

var modifiedNamesList = simpOrSamp(simpList)
log( modifiedNamesList[1] === "OJ Sampson" )
log( modifiedNamesList[2] === "Marge Sampson" )
log( modifiedNamesList[5] === "Maggie Simpson" )


////------------------------------------------------------------------
// TASK 2 : Write a function called shortiesOnly(). It should as input an array of strings, and
//    it should return a new array containing only those strings with four or fewer characters.
////------------------------------------------------------------------

var allNames = [
    "Ed",
    "Tom",
    "Elfrid",
    "Sam",
    "Bartholomeu",
    "Wayne",
    "Theodore",
    "Ingrid",
    "Fred",
    "Yvette"
]
//INPUT: Array
var shortiesOnly = function(arrOfStrings) {
				var arrayResults = []

    for (var i = 0; i < arrOfStrings.length; i = i +1){
					var newName = arrOfStrings[i];

    		if (newName.length <= 4) {
                		arrayResults.push(newName)
      			}

    }
    //OUTPUT: Array
        return arrayResults
}


var shortList = shortiesOnly(allNames)
console.assert( shortList.length === 4 )
// checks to see that FRED is INCUDED in the array.
console.assert( shortList.indexOf('Fred') != -1 )
// checks to see that WAYNE is NOT in the array.
console.assert( shortList.indexOf('Wayne') === -1 )
