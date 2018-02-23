// CHAPTER 6 QUEUES AND STACKS 

// ************* QUEUES - first in, first out *************
function SLQueue(){
	this.head = null; 
	this.tail = null; 
	this.size = 0;
}

function Node(value){
	this.value = value;
	this.next = null; 
}

SLQueue.prototype.enqueue = function(value){
	var newNode = new Node(value);

	if(!this.head){
		this.tail = newNode;
		this.head = newNode;
		this.size++; 
	}else{
		this.tail.next = newNode;
		this.tail = newNode; 
		this.size++;
	}
	return this;
};

SLQueue.prototype.dequeue = function() {
	if(this.head){
		var data = this.head.value;
		this.head = this.head.next; 
		this.size--;
		if(!this.head){
			this.head = this.tail; 
		}
	}
	console.log(data);
	return data; 
};

SLQueue.prototype.front = function(){
	if(!this.head){
		return undefined; 
	}else{
		console.log(this.head.value);
		return this.head.value; 
	};
}

SLQueue.prototype.length = function(){
	console.log(this.size)
	return this.size;
};

SLQueue.prototype.isEmpty = function(){
	if(!this.head){
		return "Is Empty"; 
	}else{
		return "It is not empty"; 
	}
};

var queue = new SLQueue();
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
// queue.dequeue();
// queue.front();
// queue.length();
// var x = queue.isEmpty();
// console.log(x);
// console.log(queue);

// ********************* STACKS - last in, first out *************

function ArrStack(){
	this.stack = [];
}

ArrStack.prototype.push = function(value){
	this.stack.push(value);
};

ArrStack.prototype.pop = function(){
	return this.stack.pop();
};

ArrStack.prototype.top = function(){
	return this.stack[this.stack.length -1];
};

ArrStack.prototype.contains =function(value){
	for(var i = 0; i < this.stack.length ; i++){
		if(this.stack[i] == value){
			return true;
		}else{
			continue; 
		}
	}
	return false;
};

ArrStack.prototype.isEmpty = function(){
	if(this.stack.length === 0){
		return "is Empty";
	}else{
		return "is not empty";
	}
};

ArrStack.prototype.size = function(){
	return this.stack.length;
};

ArrStack.prototype.print = function(){
	console.log(this.stack.join(' '));
};

var stack = new ArrStack; 
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
// stack.print();
// stack.isEmpty();
// var x = stack.contains(5);
// console.log(x)
// console.log(stack);

// *************** STACK LINKED LIST *****************

function SLStack(){
	this.head = null;
	this.tail = null;
	this.size = 0; 
}

SLStack.prototype.push = function(value){
	var newNode = new Node(value);
	if(!this.head){
		this.head = newNode;
		this.tail= newNode;
	}else{
		this.tail.next = newNode;
		this.tail = newNode;
	}
	this.size++;
};

SLStack.prototype.remove = function(data){
	var previous = this.head;
	var current = this.head;
	while(current) {
		if(current.data === data) {
			if(current === this.head) {
				this.head = this.head.next;
			}
			if(current === this.tail) {
				this.tail = previous;
			}
			previous.next = current.next;
			this.size--;
		} else {
			previous = current;
		}
		current = current.next;
	}
	return this;
};


var sls = new SLStack();
sls.push(3);
sls.push(7);
sls.push(10);
sls.remove(7);

console.log(sls)

