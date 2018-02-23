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

    while(thisNode){
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
    console.log(this._length)
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

SinglyList.prototype.prependVal = function(value, beforeValue){
 
    var newnode = new Node(value);
    let previousNode = this.head;
    let thisnode = previousNode.next;

    if(!this.head){
        this.head = newnode;
        return this;
    }

    if(previousNode.value == beforeValue){
        newnode.next = this.head;
        this.head = newnode; 
        this._length++;
        return this; 
    } 

    while(thisnode){
        if(thisnode.value == beforeValue){
            newnode.next = thisnode;
            previousNode.next = newnode;
            this._length++;
            break;
        }
        previousNode = thisnode;
        thisnode = thisnode.next;
    }

    if(thisnode === null){
        this.add(value)
    }

    var list = this.sListDisplay();
    // console.log(list);
    return this; 
}


SinglyList.prototype.sListAppendVal = function(value, afterValue){
    var newnode = new Node(value);
    let previousNode = this.head;
    let thisnode = previousNode.next;

    if(!this.head){
        this.head = newnode;
    };

    while(thisnode){
        if(previousNode.value == afterValue){
            newnode.next = thisnode;
            previousNode.next = newnode;
            this._length++;
            break;
        }
        previousNode = thisnode;
        thisnode = thisnode.next;
    }

    if(thisnode === null){
        this.add(value);
    }

    var list = this.sListDisplay();
    // console.log(list);
    return this;
};

SinglyList.prototype.sListRemoveVal = function(value){
    let previousnode = this.head;
    let thisnode = previousnode.next;

    if(!this.head){
        return undefined; 
    }

    if(previousnode.value == value){
        this.head = thisnode;
        return this;
    }

    while(thisnode){
        if(thisnode.value == value){
            previousnode.next = thisnode.next;
            break;
        }
        previousnode = thisnode;
        thisnode = thisnode.next;
    }

    if(thisnode === null){
        return undefined;
    }

    var list = this.sListDisplay();
    // console.log(list);
    return this;
}

SinglyList.prototype.sListRemoveNegatives = function(){

    let previousnode = this.head;
    let thisnode = previousnode.next;

    if(!this.head){
        return undefined; 
    }

    if(previousnode.value < 0){
        this.head= thisnode;
        thisnode = thisnode.next;
    }

    while(thisnode){

        if(thisnode.value < 0){
            previousnode.next = thisnode.next;
        }
        previousnode = thisnode;
        thisnode = thisnode.next;
    }

    if(this.head.value < 0){
        this.removeFront();
    }

    var list = this.sListDisplay();
    console.log(list); 
    return this;
};

SinglyList.prototype.kthFromEnd = function(sll, k){
   var node = sll.head,
       i = 1,
       kthNode;
   //handle, 0 or negative value of k
   if(k<=0) return;

    while(node){
      if(i == k) kthNode = sll.head;
      else if(i-k>0){
       kthNode = kthNode.next;
      }
      i++;

      node = node.next;
    }
   return kthNode;
};

SinglyList.prototype.deleteKthFromEnd = function(sll, k){
    var node = sll.head,
       i = 1,
       kthNode,
       previous;
   if(k<=0) return sll;

    while(node){
      if(i == k) kthNode = sll.head;
      else if(i-k>0){
       previous = kthNode;
       kthNode = kthNode.next;
      }
      i++;

      node = node.next;
    }
    //kth node is the head
    if(!previous)
       sll.head = sll.head.next;
    else{
     previous.next = kthNode.next;
   }
   return sll; 
};

SinglyList.prototype.reversesll = function(sll){
    if(!sll.head || !sll.head.next) return sll;

  var nodes=[], 
    current = sll.head;
  //storing all the nodes in an array
  while(current){
    nodes.push(current);
    current = current.next;
  }
    
  var reversedLL = new LinkedList();
  
  reversedLL.head = nodes.pop();
  current = reversedLL.head;
  
  var node = nodes.pop();  
  //make sure to make next of the newly inserted node to be null
  //other wise the last node of your SLL will retain its old next.
  while(node){
     node.next = null;
     current.next = node;
     
     current = current.next;
     node = nodes.pop();
  }
  return reversedLL;
}


var sll = new SinglyList(); 
sll.add(14);
sll.add(-11);
sll.add(-3);
sll.add(2);
sll.add(-7);
// sll.add("Hello");
// sll.add("ending")
// sll.searchNodeAt(2);

// var y = sll.sListDisplay();
// console.log(y);
// sll.remove(25);
// sll.sListLength(1);
// sll.contains();
// sll.prependVal(8, 2);
// sll.sListAppendVal(10, 11);
// sll.sListRemoveVal(2);
var x = sll.sListRemoveNegatives();
// sll.sListMoveMaxtoBack();
// sll.sListAddBack(8)
// sll.sListRemoveBack();

// var y = sll.sListAverage();
// sll.sListMin();
// sll.sListMax();
console.log(x);

// console.log(a);

