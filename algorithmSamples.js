/////////BubbleSort //////////////

function bubbleSort(arr){
	for (var x = 1; x < arr.length; x++){
		for (var i = 0; i <= arr.length - x ; i++){
			if( arr[i] > arr[i + 1]){
				var temp = arr[i + 1];
				arr[i + 1] = arr[i];
				arr[i] = temp ; 
			}
		}
	}
	return arr;
}

//////////////////Rotate String //////(ABC,1 -> CAB) /////////////////////////////

function rotateString(str, num){
	num = num % str.length; 
	if(num === 0 ){
		return str;
	}else{
		var arr = str.split("");
		var temp = arr[arr.length -1];
		for(var i = 1; i<arr.length-1; i++){
			arr[i] = arr[i -1]
		}
		arr[0] = temp; 
		str = arr.join();
		num--;
		return rotateString(str,num);
	}
}

/////////////////Write a function that takes a string as input and reverse only the vowels of a string.
//Given s = "hello", return "holle".

var reverseString = function(str) {
    newStr = "";
  
    for(var i = str.length-1; i >=0; i--){
        newStr+= str[i];
    }
    console.log(newStr);
    return newStr;
};

var str = "hello"; //return "olleh".
// reverseString(str);

/////////////////////Write a program that prints the numbers from 1 to 100. 
//But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
//For numbers which are multiples of both three and five print “FizzBuzz”.

var fizzBuzz = function(n) {
    str = [];
    for(var i = 1 ; i <= n ; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz"); 
            str.push("FizzBuzz");
        }else if(i % 3 == 0){
            console.log("Fizz");
             str.push("Fizz");
        }else if( i % 5 == 0){
            console.log("Buzz");
             str.push("Buzz");
        }else{
            console.log(i);
             str.push(i);
        }
    }
    return str;
};

// fizzBuzz(15);

///////////////////////* Approach 2: O(n^2), count all of the letters in the first string in a hash, then subtract from the counts for the second string.
  // If a count goes negative, we've found the differing letter. */


var findTheDifference = function(s, t) {
    var result = '';
    
    var hash = {};
    for (var i=0; i<s.length; i++) {
        hash[s[i]] = hash[s[i]] + 1 || 1;
    }
    
    for (var i=0; i<t.length; i++) {
        if (!hash[t[i]] || hash[t[i]] - 1 < 0) {
            result = t[i];
            break;
        }
        else {
            hash[t[i]]--;
        }
    }
    
    return result;
};

s = "abcd"
t = "eabcd"
findTheDifference(s, t);

////////////////////Given an array of integers, every element appears twice except for one. Find that single one.

var singleNumber = function(nums) {
    var result = nums[0];
    
    var memory1 = {};
    var memory2 = {};
    
    for (var i=0; i<nums.length; i++) {
        if (memory1[nums[i]]) {
        	console.log(memory1);
            // We've already seen this number, so move it to the second hash.
            delete memory1[nums[i]];
            memory2[nums[i]] = 1;
           
        }
        else {

            // Mark this number as seen.
            memory1[nums[i]] = 1;
        }
    }
    
    result = parseInt(Object.keys(memory1)[0]);
    console.log(result);
    return result;
};

singleNumber(nums);
