export class DoublyNode<T> {
  public data: T;
  public next: DoublyNode<T> | null;
  public prev: DoublyNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList<T> {
  private head: DoublyNode<T> | null;
  private tail: DoublyNode<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(data: T): void { // tested
    const node = new DoublyNode(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;

      if (this.tail != null){
          this.tail.next = node;
      }
      this.tail = node;
    }

    this.length++;
  }

  deleteAll(data: T): void { //tested
    let current = this.head;

    while (current) {
      if (current.data === data) {
        if (current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (current === this.head) {
          this.head = current.next;
          if(this.head != null) this.head.prev = null;
        } else if (current === this.tail) {
          this.tail = current.prev;
          if(this.tail != null) this.tail.next = null;
        } else {
          if(current.prev != null) current.prev.next = current.next;
          if(current.next!=null) current.next.prev = current.prev;
        }

        this.length--;
        return;
      }

      current = current.next;
    }
  }

  insert (element: T, index: number): void { //tested
    if (index < 0 || index > this.length) {
      throw new Error('Invalid index');
    }
  
    const newNode = new DoublyNode(element);
  
    if (index === 0) {
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    } else if (index === this.length) {
      if (this.tail != null) this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      let currentNode = this.head;
      let currentIndex = 0;
  
      while (currentIndex < index) {
        if (currentNode!=null) currentNode = currentNode.next!;
        currentIndex++;
      }
  
      newNode.next = currentNode;
      if (currentNode) {
        newNode.prev = currentNode.prev!;
        currentNode.prev!.next = newNode;
        currentNode.prev = newNode;
      }

    }
  
    this.length++;
  }

  get(index: number): T|null { //tested
    if (index < 0 || index >= this.length) {
      throw new Error('Invalid index');
    }

    let current: DoublyNode<T> | null;
    if (index < this.length / 2) {
      // Search from the head
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current?.next || null;
      }
    } else {
      // Search from the tail
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current?.prev || null;
      }
    }

    return current!.data;
  }


  delete(index: number): T { // tested
    if (index < 0 || index >= this.length) {
      throw new Error('Invalid index');
    }

    let deletedNode: DoublyNode<T> | null = null;

    if (this.length === 1) {
      deletedNode = this.head;
      this.head = null;
      this.tail = null;
    } else if (index === 0) {
      deletedNode = this.head;
      this.head = this.head!.next;
      this.head!.prev = null;
      deletedNode!.next = null;
    } else if (index === this.length - 1) {
      deletedNode = this.tail;
      this.tail = this.tail!.prev;
      this.tail!.next = null;
      deletedNode!.prev = null;
    } else {
      let currentNode = this.head!;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next!;
      }
      deletedNode = currentNode;
      currentNode.prev!.next = currentNode.next;
      currentNode.next!.prev = currentNode.prev;
      deletedNode!.next = null;
      deletedNode!.prev = null;
    }

    this.length--;

    return deletedNode!.data;
  }



  public findFirst(value: T): number { // tested
    let currentNode = this.head;
    let index = 0;
    while (currentNode !== null) {
      if (currentNode.data === value) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }
    return -1;
  }
  
  public findLast(value: T): number { //tested
    let currentNode = this.tail;
    let index = this.length - 1;
    while (currentNode !== null) {
      if (currentNode.data === value) {
        return index;
      }
      currentNode = currentNode.prev;
      index--;
    }
    return -1;
  }

  public clear(): void { // tested
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  toArray(): T[] { // tested
    const result = [];

    let current = this.head;

    while (current) {
      result.push(current.data);
      current = current.next;
    }

    return result;
  }


  public extend(list: LinkedList<T>): void { // tested
    if (!list.head) return;
  
    if (!this.head) { 
      this.head = list.head;
    } else { 
      this.tail!.next = list.head;
      list.head.prev = this.tail;
    }
  
    this.tail = list.tail; 
    this.length += list.length; 
  }

  
  size(): number { // tested
    return this.length;
  }

  reverse(): void { // tested
    let current = this.head;
    let temp = null;

    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

  clone(): LinkedList<T> {
    const newList = new LinkedList<T>();
    let currentNode = this.head;
  
    while (currentNode) {
      const newNode = new DoublyNode<T>(currentNode.data);
      if (!newList.head) {
        newList.head = newNode;
        newList.tail = newNode;
      } else {
        newList.tail!.next = newNode;
        newNode.prev = newList.tail;
        newList.tail = newNode;
      }
      currentNode = currentNode.next;
    }
  
    newList.length = this.length;
    return newList;
  }
}