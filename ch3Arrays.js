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
