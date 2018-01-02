//ALOGORITM CHAPTER 5 - LINKED LIST 
// CLASS definition is like a blueprint of complex machine, from which many copies can be made. 
//References are fixed-size, so this enables the runtime do its stack magic. A pointer points to the memory 
//location. 
//LINKED LISTS - storing the location of the variable, instead of its value. 
//NODE - simple holds a value and a pointer linking it to the next mode in sequence. 

function Node(value){
	this.value = value;
	this.next = null; 
}
 
function SinglyList() {
    this._length = 0;
    this.head = null;
}
 
SinglyList.prototype.add = function(value) {
    var node = new Node(value),
        currentNode = this.head;
 
    // 1st use-case: an empty list
    if (!currentNode) {
        this.head = node;
        this._length++;
 
        return node;
    }
 
    // 2nd use-case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
 
    currentNode.next = node;
 
    this._length++;
     
    return node;
};
 
SinglyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};
 
    // 1st use-case: an invalid position
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: a valid position
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }
 
    return currentNode;
};
 
SinglyList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 0,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;
 
    // 1st use-case: an invalid position
    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: the first node is removed
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;
         
        return deletedNode;
    }
 
    // 3rd use-case: any other node is removed
    while (count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }
 
    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;
 
    return deletedNode;
};

function sll(){
	this.head = null; 
}

sll.prototype.add=function(val){
	var tempNode = new Node(val)
	if(!this.head){
		this.head = tempNode;
	}else{
		var curNode = this.head;
		while(curNode.next != null){
			curNode = curNode.next;
		}
		curNode.next = tempNode;
	}
}

var mysll = new sll();
console.log(mysll)
mysll.add(1);
console.log(mysll)
mysll.add(3);
console.log(mysll)

//LIST: ADD FRONT 
function addFront(value){
	this.head = null; 
	this.add = function(value){
		var tempNode = new Node(value);
		if(this.head == null){
			this.head = tempNode;
		}else{
			var cur = this.head;
			while(cur.next != null){
				cur = cur.next;
			}
			cur.next = tempNode;
		}
	}
	return this;
}

var t = addFront(3);
console.log(t);

