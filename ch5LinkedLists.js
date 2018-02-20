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
    var node = new Node(value);
 
    // 1st use-case: an empty list
    if(!this.head) {
        this.head = node;
        this._length++;
        return node;
    }
    currentNode = this.head;
    // 2nd use-case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
 
    currentNode.next = node;
    this._length++; 
    // console.log(node) 
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

SinglyList.prototype.removeFront = function(){
    if(!this.head){
        return undefined; 
    }
    const value = this.head.value;
    this.head = this.head.next;
    return value; 

}
 
SinglyList.prototype.remove = function(value) {
    if(this._length === 0){
        return undefined; 
    }
    if(!this.head){
        this.removeFront();
        return this; 
    }
    let previousNode = this.head;
    let thisNode = previousNode.next; 

    while(this.node){
        if(thisNode.value == value){
            break;
        }
        previousNode = thisNode;
        thisNode = thisNode.next; 
    }

    if(thisNode == null){
        return undefined; 
    }
    
    previousNode.next = thisNode.next; 
    return this; 
};

SinglyList.prototype.addFront = function(value){
    var newNode = new Node(value);

    if(!this.head){
        this.head = newNode; 
        this._length ++; 
    }
    newNode.next = this.head;
    this.head = newNode; 
    return this; 
}




var sll = new SinglyList(); 
sll.add(1);
sll.add(25);
sll.add(35);
sll.add(4);
sll.searchNodeAt(2);
var x = sll.remove(25);

// console.log(sll);
console.log(x);

