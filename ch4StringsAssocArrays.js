//ALGORITHM CHAPTER 4 - STRINGS AND ASSOCIATED ARRAYS 

//STRINGS - are arrays of characters.
	//1. cannot write individual characters in a string in the same way. 
	//once it is define, characters can only be referenced by [] not changed. 
	//Strings are immutable: they can be completely replaced in their entirety, 
	//not not changed piecewise. 
	//to manipulate string characters, you must split the string into an array, 
	//make individual changes within that array, then JOIN the array to reform a string. 


//String.length - referencing individual elements
//String.split - converting string to array
//Array.join - converting array back to string 

// var funStr= "Hanh is Cool"
// console.log(typeof funStr); //string
// console.log(funStr.length); //12

// wordArray= funStr.split(" ") //space between quotes 
// console.log(wordArray[2].split("")) //[ 'C', 'o', 'o', 'l' ]
// console.log(wordArray.join()) //Hanh,is,Cool
// console.log(wordArray.join("-")) //Hanh-is-Cool
// console.log(wordArray.join("")) //HanhisCool

// wordArray= funStr.split("") //no space between quotes
// console.log(wordArray[2].split("")) //[ 'n' ]
// console.log(wordArray.join()) //H,a,n,h, ,i,s, ,C,o,o,l
// console.log(wordArray.join("-")) //H-a-n-h- -i-s- -C-o-o-l
// console.log(wordArray.join("")) //Hanh is Cool

//*******************END NOTES*********************************************//

//REMOVE BLANKS
var str=" Pl  ayTha tF  u  nkyM usi   c "
function removeBlanks(str){
	wordArray = str.split(" "); //split all the words up by spaces and spaces counts
	console.log(wordArray) //[ '', 'Pl', '', 'ayTha', 'tF', '', 'u', '', 'nkyM', 'usi', '', '', 'c', '' ]
	console.log(wordArray.join("")); // PlayThatFunkyMusic
}

//STRING: GET DIGITS 
var str1 = "osqa3y5w7h9a2t4?6!8?0"
function strGetDigits(str){

}