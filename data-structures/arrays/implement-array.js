// Implementing an Array

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const lastItem = this.data[index];
    this.shiftItems(index);
    return lastItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  unshift(...items) {
    this.shiftAndAddItems(items);
    this.length += items.length;
    return this.length;
  }

  shiftAndAddItems(items) {
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + items.length] = this.data[i];
    }

    for (let j = 0; j < items.length; j++) {
      this.data[j] = items[j];
    }
  }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('hello');
newArray.push('!');
console.log(newArray);

newArray.pop();
newArray.delete(2);

newArray.unshift(1, 2);
console.log(newArray);
