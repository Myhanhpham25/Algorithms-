//ALGORITHMS CHAPTER 3- ARRAYS 

//ARRAY: PUSH FRONT
function addFront(arr, num){
	new_arr = [];
	new_arr.push(num); 
	for(var i = 0; i < arr.length; i++){
		new_arr.push(arr[i]);	
	}
	console.log(new_arr);
	return new_arr;
}

//ARRAY: POP FRONT
function popFront(arr){
	temp = arr[0];
	arr[0] = arr[arr.length-1];
	arr[arr.length -1] = temp; 
	arr.pop();
	console.log(temp)
	return temp;
}

//ARRAY: INSERT AT
function insertArr(arr, idx, val){
	new_arr = []; 
	for(var i = 0; i < arr.length; i++){
		if(i == idx){
			new_arr.push(val);
			new_arr.push(arr[i]);
		}else{
			new_arr.push(arr[i]);
		}
	}
	console.log(new_arr);
	return new_arr;
}

// ARRAY: REMOVE AT
function removeAt(arr, idx){
for(var i = 0; i < arr.length; i++){
	if(i == idx){
		temp = arr[i];
		arr[i] = arr[arr.length -1];
		arr[arr.length -1] = temp; 
		arr.pop();
		}
	}
	console.log(temp);
	console.log(arr);
	return temp;
}

//ARRAY: SWAP PAIRS
function swapPairs(arr){
	for(var i = 0; i < arr.length-1; i++){
		temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
		i++;
	}
	console.log(arr);
	return arr;
}

//ARRAY: REMOVE DUPLICATES 
function removeDuplicates(arr){
	new_arr=[];
	for(var i = 0; i <arr.length; i++){
		if(arr[i] != arr[i -1]){
			new_arr.push(arr[i]);
		}
	}
	console.log(new_arr);
	return new_arr;
}

//ARRAY : MIN TO FRONT 
function minToFront(arr){
	for(var i = 0; i < arr.length; i++){
		if(arr[0] > arr[i]){
			temp = arr[0];
			arr[0] = arr[i];
			arr[i] = temp; 
		}
	}
	console.log(arr);
	return arr;
}

//ARRAY : REVERSE 
function reverseArr(arr){
	for(var i = 0; i < arr.length/2; i++){
		temp = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp;
	}
	console.log(arr);
	return arr;
}

//ARRAY: ROTATE 

function rotateArr(arr, shiftBy){
	for(var i = 0; i < shiftBy; i++){
		previous = arr[arr.length-1];
		for(var k = 0; k < arr.length; k++){
			temp = arr[k];
			arr[k] = previous;
			previous = temp;
		}
	}
	console.log(arr);
	return arr;
}

// ARRAY: FILTER RANGE 
function filterArr(arr, min, max){
	for(var i = 0; i < arr.length; i++){
		if(arr[i] >= min && arr[i] <= max){
		console.log(arr[i]);
		}else{
			temp = arr[i] ; 
			arr[i] = arr[arr.length];
			arr[arr.length] = temp;
			arr.pop();
		}
	}
	console.log(arr);
}

//ARRAY : CONCAT
function concatArr(arr1, arr2){
	new_arr = [];
	new_arr = arr1;
	for(var i = 0; i <arr2.length; i++){
		new_arr.push(arr2[i]);
	}
	console.log(new_arr);
	return new_arr;
}

// ARRAY: REMOVE NEGATIVES 
function removeNegatives(arr){
	new_arr = [];
	for(var i = 0; i < arr.length; i++){
		if(arr[i] > 0){
			new_arr.push(arr[i]);
		}
	}
	console.log(new_arr);
	return new_arr;
}

// ARRAY: REMOVE NEGATIVES 
function removeNegatives2(arr){
	while (arr.length && arr[arr.length - 1] < 0) {
	  arr.pop();
	}
	for (var i = arr.length - 1; i >= 0; i--) {
	  if (arr[i] < 0) {
	    arr[i] = arr[arr.length - 1];
	    arr.pop();
	  }
	}
	console.log(arr)
}

// ARRAY: REMOVE NEGATIVES 
function removeNegatives3(arr){
	for(var i = 0; i < arr.length; i++) {
		if(arr[arr.length - 1] < 0){
			arr.pop();
		}
	 	if(arr[i] < 0) {
	    	arr[i] = arr[arr.length - 1];
	    	arr.pop();
	  	}
	}
	console.log(arr)
}

//ARRAY: SECOND TO LAST 
function secondToLastArr(arr){
	for(var i = 0; i < arr.length; i++){
		if(arr.length<1){
			return null;
		}else{
			console.log(arr[arr.length-2])
			return arr[arr.length-2];
		}
	}
}

//ARRAY: SECOND-LARGEST
function secondLargest(arr){
	first = 0;
	second = 0;
	if(arr.length<2){
			return null;
		}

	for(var i = 0; i < arr.length; i++){
		if(arr[i] > first){
			second = first;
			first = arr[i];
		}
		else if(arr[i] > second && arr[i] != first){
			second = arr[i];
		}
	}
	console.log(second);
}

//ARRAY: NTH TO LAST 
function nthToLastArr(arr, num){
	for(var i =0; i < arr.length; i++){
		if(i == num){
			console.log(arr[i]);
			return arr[i];
		}
	}	
}

//ARRAY: NTH-LARGEST 
function nthLargestArr(arr){
console.log("i don't know")		
}

arr = [5, 2, 7, 3 , 0, 4, 6, 16];

//ARRAY: SHUFFLE 
function shuffle(arr) {
    var j, x, i;
    for (i = arr.length -1 ; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    console.log(arr);
}

//ARRAY : REMOVE RANGE
function removeRange(arr){
	console.log("idk")
}