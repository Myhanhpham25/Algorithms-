//1. Write a program that would print all the numbers from 1 to 255

function printAll(){
	for (var idx = 0; idx <= 255 ; idx++){
		console.log(idx);
	}
}
// printAll();

//2. Write a program that would print all the odd numbers from 1 to 1000

function oddNumbers(){
	for (var idx = 0; idx <= 1000 ; idx++){
		if(idx % 2 == 1){
			console.log(idx);
		}
	}
}
// oddNumbers();

//3. Write a program that would print the sum of all the odd numbers from 1 to 5000

function printSum(){
	sum = 0; 
	for(let i = 0; i <= 5000; i++){
		if(i % 2 == 1){
			sum = sum + i;
		}
	}
	console.log(sum);
	return sum; 	
}
// printSum();

//4. Given an array X say [1,3,5,7,9,13], 
//write a program that would iterate through each member of the array and print each value on the screen.

function showArr(arr){
	var arr = [1,3,5,7,9,13];
	for(var idx = 0; idx < arr.length; idx++){
		console.log(arr[idx]);
	}
}
// showArr();

//5. Given an array with multiple values (e.g. [-3, 3, 5, 7]),
// write a program that prints the maximum number in the array. 

function findMax(arr){
	var max = arr[0];
	for(var i = 1 ; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i] ; 
		}
	}
	console.log(max);
	return max;
}

var arr = [-3, 3, 5, 7];
// findMax(arr);

//6. Given an array with multiple values (e.g. [1,3,5,7,20]), 
//write a program that prints the average of the values in the array.  

function findAvg(arr){
	sum = 0; 
	for(let idx = 0; idx < arr.length; idx++){
		sum += arr[idx];
	}
	var avg = sum/arr.length;
	console.log(avg);
	return avg; 
}

var arr = [1,3,5,7,20];
// findAvg(arr);

// 7. Write a program that creates an array 'Y' that contains all the odd numbers between 1 to 255.

function arrOddNum(){
	var arr = [];
	for (let i = 0; i <= 255; i++){
		if(i % 2 == 1){
			arr.push(i);
		}
	}
	console.log(arr);
}

// arrOddNum();

// 8. Write a program that takes an array and returns the number of values in that array whose value is greater than y.

function greaterThanY(arr, y){
	count = 0;
	for (let idx = 0; idx < arr.length; idx++){
		if(arr[idx] > y){
			count++;
		}
	}
	console.log(count);
	return count; 
}
var arr = [1,3,5,7];
y = 3;

// greaterThanY(arr, y);

// 9. Given an array x (e.g. [1,5, 10, -2]), 
// create an algorithm (sets of instructions) that squares each value in the array. 

function squareValues(arr){
	for(let idx = 0; idx < arr.length; idx++){
		arr[idx] = arr[idx] * arr[idx];
	}
	console.log(arr);
}

var arr = [1,5, 10, -2]
// squareValues(arr);

// 10. Given an array x (e.g. [1,5, 10, -2]), 
// create an algorithm (sets of instructions) that replaces any negative number with the value of 0. 

function noNegatvies(arr){
	for(let idx = 0; idx < arr.length; idx++){
		if(arr[idx] < 0){
			arr[idx] = 0;
		}
	}
	console.log(arr);
	return arr;
}

var arr = [ 1,5,10, -2];
// noNegatvies(arr);

// 11. Given an array x (e.g. [1,5, 10, -2]), 
// create an algorithm (sets of instructions) that prints the maximum number in the array, 
// minimum value in the array as well as the average values in the array. 

 function maxMinAvg(arr){
 	max = 0;
 	min = 0;
 	sum = 0; 

	for(var idx = 0; idx < arr.length; idx++){
		if(arr[idx] > max){
			max = arr[idx];
		}
		if(arr[idx] < min){
			min = arr[idx];
		}
		sum = sum + arr[idx];
	}
	let avg = sum / arr.length;
	console.log("min " + min + " max " + max + " avg " + avg);
	return min, max, avg;
}

var arr = [1,5, 10, -2];
// maxMinAvg(arr);

// 12. Given an array x (e.g. [1,5, 10, 7, -2]), 
// create an algorithm (sets of instructions) that shifts each number by one (to the front).  
// For example when the program is done x (assuming it was [1,5,10,7,-2]) should become [5,10,7,-2, 0].  

function shiftLeft(arr){
	for ( let idx = 0 ; idx < arr.length; idx++){
		arr[idx] = arr[idx + 1 ];	
	}
	arr[arr.length -1 ] = 0;
	console.log(arr);
}

var arr = [1,5, 10, 7, -2];

// shiftLeft(arr);


// 13. Write a program that takes an array of numbers and replaces any number thats negative to a string called 'Dojo'. 
// For example if array = [-1, -3, 2] after your program is done array should be ['Dojo', 'Dojo', 2].

function negToString(arr){
	for ( let idx = 0 ; idx < arr.length ; idx++){
		if(arr[idx] < 0){
			arr[idx] = "Dojo";
		}
	}
	console.log(arr);
}

var arr = [-1, -3, 2];
// negToString(arr);

// 14. Create an array X and fill the array with 10 values, each value being a random integer between 0 to 100.  

function randomArray(){
var arr = [];
for(var i = 1; i <=10 ; i++){
	var ran = Math.floor(Math.random()*100 + 1)
	arr.push(ran);
}
console.log(arr);
}

// randomArray();

// 15. 
// Write a program that takes an array of numbers and returns an array where the first 
// and last numbers in the array have been switched.For example say x = [2, 3, 5, 7, 6]. 
// By the end of the program x, should be [6, 3, 5, 7, 2]. Do this without creating an empty array.


function swapFirstLast(arr){
	var temp = arr[0];
	arr[0] = arr[arr.length-1];
	arr[arr.length-1] = temp;
	console.log(arr);	
}

var arr = [2, 3, 5, 7, 6];
// swapFirstLast(arr);

// 16. Given an array X of multiple values (e.g. [-3,5,1,3,2,10]), 
// write a program that reverses the values in the array.  
// Once your program is done X should be in the reserved order.  
// Do this without creating a temporary array.  
// Also, do NOT use the reverse method but find a way to reverse the values in the array 
// (HINT: swap the first value with the last; second with the second to last and so forth).

function reverseArray(arr){
	var temp = 0; 
	for(var idx = 0; idx < arr.length/2; idx++){
		temp = arr[idx];
		arr[idx] = arr[arr.length-1 - idx];
		arr[arr.length-1 - idx] = temp; 
	}
	console.log(arr);
}

var arr = [-3,5,1,3,2,10];
// reverseArray(arr);

// 17. Write a program that inserts a new number X at an index Y. 
// For example if array = [1, 3, 5, 7] and X = 10, and Y = 2, 
// by the end of your program array should be [1, 3, 10, 5, 7] 
// (in other words we added '10' on index 2). 
// Check the output of your array once your program is completed to make sure its working correctly.

function insertX(arr, x, y){
	new_arr = [];
	for (i = 0; i < arr.length; i++){
		if(arr[i] == arr[y]){
			new_arr.push(x);
			new_arr.push(arr[i]);
		}else{
			new_arr.push(arr[i]);
		}
	}
	console.log(new_arr)
}

var arr = [ 1, 3, 5, 7];
var y = 2 ;
var x = 10;

// insertX(arr, x, y);

// 18. Given an array of multiple values (e.g. [0, -1, 2, -3, 4, -5, 6]), 
// write a program that removes any negative values in that array. 

function removeNegatives(arr){
	var numNegatives = 0; 

	for (var i = 0; i < arr.length; i++){
			if(arr[i] < 0){
				numNegatives++;
			}else{
				arr[i - numNegatives] = arr[i];
			}
			console.log(arr)
		}
		while (numNegatives--){
			arr.pop();
		}
	console.log(arr);
	return arr;

}

var arr = [0, -1, 2, -3, 4, -5, 6];

removeNegatives(arr);



















