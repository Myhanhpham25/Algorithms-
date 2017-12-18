// LINEAR SEARCH 
function linearSearch(y, arr){
	for(let i = 0 ; i < arr.length; i++){
		if(arr[i] == y){
			console.log(i)
			return i;
		}else{
			console.log(false)
			return false;
		}
	}
}
var arr = [ 24, 8, 23, 3]
// linearSearch(8, arr);
// linearSearch(-99, arr);

// RECURSION last in ; first out
function rSum(num){
	if(num == 1){
		return 1; 
	}else{
		return rSum(num -1 ) + num;
	}
}

// console.log(rSum(5))
// 	5 + rSum(4) => 5 + 10 = 15
// 		4 + rSum(3) => 4 + 6 = 10 
// 			3 + rSum(2) => 3 + 3 = 6 
// 				2 + rSum(1) => 2 + 1 = 3 

//iSum Assigment iterate 

function iSum(num){
	var sum = 0;
	for(let i = 1; i <= num; i++){
		sum = sum + i;
	}
	console.log(sum);
	return sum;
}
// iSum(5)

//RECURSIVE iFactorial
function iFactorial(num){ 
	if(num == 1){
		return 1;
	}else{
		return iFactorial(num -1 ) * num 
	}
}
// console.log(iFactorial(5)); //120 

//ITERATE iFactorial
function iFactorial(num){
	var sum = 1; 
	for(var i = 1; i <= num ; i++){
		sum = sum * i 
	}
	console.log(sum)
	return sum 
}
// iFactorial(7)

//ITERATE FIBONACCI 

function iFibonacci(num){
var a = 0; 
var b = 1;
var result = b;

for(var i = 0; i < num ; i++){
	result = a + b; 
	a = b;
	b = result; 
}
console.log(result)
}

// iFibonacci(7)

//RECURSIVE FIBONACCI
function rFibonaccio(num){
	if(num === 1 || num === 2) {
		return 1;
	}else{
		return rFibonaccio(num - 1 ) + rFibonaccio(num - 2);
	}
}

// console.log(rFibonaccio(7));


//BINARY SEARCH TREE 
var arr = [-90,-19,0,2,12,29,33,190,320];

function rBS(arr, min, max, num){
	if(min > max){
		return -1;
	}
	mid = min + (max-min)/2;
	if(num == arr[mid]){
		return mid;
	}else if(num < arr[mid]){
		return rBS(arr, min, mid-1, num);
	}else{
		return rBS(arr, max, mid+1, num);
	}
}

console.log(rBS(arr, 12))
// rBS(arr, 5)              => false
// rBS(arr, 12)             => 4
// rBS(arr, 0)              => 2
// rBS(arr, 190)            => 7










