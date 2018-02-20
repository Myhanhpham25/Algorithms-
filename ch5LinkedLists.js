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
};

SinglyList.prototype.contains = function(){
    if(!this.head){
        return undefined;
    }
    return this.head.value;
};

SinglyList.prototype.sListLength = function(value){
    var newNode = new Node(value)
    if(!this.head){
        this.head = newNode;
        this._length++;
        return this._length;
    }else{
        currentNode = this.head;
        while(currentNode.next != null){
            currentNode = currentNode.next; 
        }
        currentNode = newNode;
        this._length++
        return this._length;
    }
};

SinglyList.prototype.sListDisplay = function(){
    myList = []; 
    if(!this.head){
        return undefined;
    }
    currentNode = this.head;

    while(currentNode){
        myList.push(currentNode.value);
        currentNode = currentNode.next;
    }
    console.log(myList);
    console.log(myList.join(" "));
    return myList;
};

SinglyList.prototype.sListMax = function(){
    var max = this.head.value;
    currentNode = this.head; 

    while(currentNode){
        if(currentNode.value > max){
            max = currentNode.value;
        }
        currentNode = currentNode.next; 
    }
    return max; 
};

SinglyList.prototype.sListMin = function(){
    currentNode = this.head 
    var min = this.head.value; 

    while(currentNode){
        if(currentNode.value < min){
            min = currentNode.value;
        }
        currentNode = currentNode.next;
    }
    return min;
}; 

SinglyList.prototype.sListAverage = function(){
    var sum = 0; 
    var count = 0; //if you don't already have length tracked
    var length = this._length; 
    currentNode = this.head; 

    while(currentNode){
        sum += currentNode.value; 
        console.log(sum);
        count++;
        currentNode = currentNode.next;
    }
    var average = Math.floor(sum/length); 
    return average; 
};

SinglyList.prototype.sListBack = function(){
    currentNode = this.head; 

    while(currentNode.next != null){
        currentNode = currentNode.next;
    }
    return currentNode.value; 
};

SinglyList.prototype.sListRemoveBack = function(){
    previousNode = this.head; 
    thisNode = previousNode.next;


    while(thisNode){
        if(thisNode.next == null){
            break;
        }
       previousNode = thisNode;
       thisNode = thisNode.next;
    }
    previousNode.next = null; 
    return this;    
};

SinglyList.prototype.sListAddBack = function(value){
    var newNode = new Node(value);
    if(!this.head){
        this.head = newNode;
        this._length++;
        return newNode;
    }else{
        currentNode = this.head;
        while(currentNode.next !=null){
            currentNode = currentNode.next;
        }
        currentNode = newNode;
        this._length++;
        return this;
    }
};

SinglyList.prototype.sListMoveMintoFront = function(){
    var low = this.sListMin();
    // console.log(low)
    var front = this.addFront(low)
    // console.log(front)
    return this;
};

SinglyList.prototype.sListMoveMaxtoBack = function(){
    var high = this.sListMax();
    console.log(high);
    var back = this.sListAddBack(high);
    console.log(back);
    return this; 
}



var sll = new SinglyList(); 
sll.add(4);
sll.add("World")
sll.add(3);
sll.add(2);
sll.add(7);
sll.add("Hello");
sll.add("ending")
// sll.searchNodeAt(2);
// sll.remove(25);
// sll.sListLength(1);
// sll.contains();
var x = sll.sListMoveMaxtoBack();
// sll.sListAddBack(8)
// sll.sListRemoveBack();
// sll.sListDisplay();
// var y = sll.sListAverage();
// sll.sListMin();
// sll.sListMax();
console.log(x);

