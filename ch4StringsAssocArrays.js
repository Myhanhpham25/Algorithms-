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
	// console.log(wordArray) //[ '', 'Pl', '', 'ayTha', 'tF', '', 'u', '', 'nkyM', 'usi', '', '', 'c', '' ]
	// console.log(wordArray.join("")); // PlayThatFunkyMusic
}

//STRING: GET DIGITS 
var str1 ="o1sqa3y5w7h9a2t4?6!8?0"
function strGetDigits(str){
	var new_str = str1.match(/\d/g);
	// console.log(new_str) //[ '1', '3', '5', '7', '9', '2', '4', '6', '8', '0' ]
	// console.log(new_str.join("")); // 1357924680
}

//ACRONYMS 
var str2 = "Live from New York, its Saturday Night!" //returns:  LFNYISN

function acronyms(str2){
	// console.log("idk")

	var wordArray = str2.split(" ");
	// console.log(wordArray) // [ 'Live', 'from', 'New', 'York,', 'it\'s', 'Saturday', 'Night!' ]

	new_str = []; 
	for(var i = 0; i < wordArray.length; i++){
		new_str.push(wordArray[i][0]);
	}
	var a = new_str.join("").toUpperCase();
	// console.log(a);
}

//COUNT NON-SPACES 
var str3 = "Honey pie, you are driving me crazy"

function noSpace(str3){
	wordArray = str3.split(" ");
	// console.log(wordArray) //[ 'Honey', 'pie,', 'you', 'are', 'driving', 'me', 'crazy' ]
	new_string = wordArray.join("")	
	// console.log(wordArray.join("")); //Honeypie,youaredrivingmecrazy
	// console.log(new_string.length);	 // 29
}

//REMOVE SHORTER STRINGS
function removeShorterStrings(){
	console.log("idk")
}

//STRING: REVERSE 
str4 = "creature";

function reverseString(str4){
	arr = [];
	wordArray = str4.split("");
	// console.log(wordArray) //[ 'c', 'r', 'e', 'a', 't', 'u', 'r', 'e' ]
	for(var i = wordArray.length-1; i >= 0 ; i--){
		arr.push(wordArray[i]);
	}
	new_str = arr.join("")
	// console.log(new_str); //erutaerc
}

// REMOVE EVEN-LENGTH STRINGS 
str5 = ["Nope!", "Its", "Kris", "starting", "with", "K!", "(instead", "of", "Chris", "with", "C)", "."];

function removeEvenLength(str5){
	new_str = []; 
	for(var i = 0; i < str5.length; i++){
		if(str5[i].length % 2 != 0){
			new_str.push(str5[i]);			
		}
	}
	console.log(new_str);	
}

//PARENS VALID 
var str6 = "Y(3(p)p(3)r)s)."

function parensValid(str6){
	new_str = str6.split("");
	console.log(new_str);
	countLeft = 0;
	countRight = 0;
	for(var i = 0 ; i < str6.length ; i++){
		if(str6[i] == "("){
			countLeft++;
		}else if(str6[i] == ")"){
			countRight++;
		}
	}
	console.log(countRight);
	console.log(countLeft);

	if(countLeft % countRight == 0){
		console.log(true);
		return true; 
	}else{
		console.log(false);
		return false;
	}
}

//STRING: IS PALINDROME
var str7 = "sracecars";

function palindrome(str7){
	wordArray = str7.split("");
	console.log(wordArray);
	for(var i = 0; i < wordArray.length; i++){
		for(var j = wordArray.length-1; j > 0 ; j--){
			if(wordArray[i] == wordArray[j]){
				console.log(true);
				return true; 
			}else{
				console.log(false);
				return false;
			}
		}
	}
}

//LONGEST PALINDROME 
var str8 = "favorite racecar erupted!"

function longPalindrome(str8){
	console.log("idk");
}

//IS WORD ALPHABETICAL 
var text= "facetiously";
var vowels="aeiouy";

function isWordAlphabetical(str9){
	new_arr = [];
	var s = text.split("")
	console.log(s)
	for(var i = 0; i < text.length; i++){
		if(text[i] == "a" || text[i] == "e" || text[i] == "i" || text[i] == "o" || text[i] == "u" || text[i] == "y"){
			new_arr.push(text[i]);
		}
	}
	var a = new_arr.join("");
	console.log(a);
	if(a == vowels){
		console.log(true);
		return true;
	}else{
		console.log(false);
		return false;
	}
}

//ZIPS ARRAYS INTO MAP 
var arr1 = ["abc", 3 , "yo"];
var arr2 = ["42", "wassup", true];
var result = {}; //need to create an empty object to start creating key, value pairs 

function arrToMap(arr1, arr2){
	for(var i = 0 ; i < arr1.length ; i++){
		result[arr1[i]] = arr2[i];
	}
	// arr1.forEach((arr1, i) => result[arr1] = arr2[i]); //another solution;
	console.log(result);	 
}

//INVERT HASH 
var someHash = {
  'item1' : '5',
  'item2' : '7',
  'item3' : '45',
  'item4' : '09'
};

function getKeyByValue(hash, value) {
  var key;
  for(key in hash) {
    if (hash[key] == value){ 
    	console.log(key)
    	return key;
    }
  }
}
//JAVASCRIPT STRING LIBRARY 

//STRING.CONCAT - adds string to an existing string.
function stringConcat(str1, str2, str3){
	var new_str = str1.concat(str2, str3)
	console.log(new_str);
}

str1 = "Happy Birthday"
str2 = "Kathy Pham. "
str3 = "You're old AF "

//STRING.SLICE(START,END)
function stringSlice(str1){
	var new_str = str1.slice(6, 15);
	console.log(new_str)
}

//STRING.TRIM
str4 = "\n Happy Birthday \t "
function stringTrim(str4){
	var new_str = str4.trim();
	console.log(new_str)
}

//STRING.SPLIT
function stringSplit(str1){
	var new_str = str1.split(" ");
	console.log(new_str);
}

//STRING.SEARCH 
function stringSearch(str1){
	var new_str = str1.search(val)
	console.log(new_str);
}
val = "d";


