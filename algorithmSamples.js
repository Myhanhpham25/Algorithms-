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



