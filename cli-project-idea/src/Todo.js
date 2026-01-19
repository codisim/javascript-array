/**
 *
 * @param {Array} arr
 */

function generateId(arr) {
  if (arr.length === 0) return 1;
  return arr[arr.length - 1].id + 1;
}

class TODO {
  constructor(todList = []) {
    this.todList = todList;
  }

  addItem(text) {
    const item = {
      text,
      id: generateId(this.todList),
      created: new Date(),
    };
  }

  update(id, text) {
    for (let i = 0; i < this.todList.length; i++) {
      if (this.todList[i].id === id) {
        this.todList[i].text = text;
        break;
      }
    }
  }

  done() {
    return this.todList.shift();
  }

  next() {
    return this.todList[0];
  }

  list() {
    return this.todList;
  }

  find(term) {
    const result = [];
    for (let i = 0; i < this.todList.length; i++) {
      if (this.todList[i].toLowerCase().text.includes(term)) {
        result.push(this.todList[i]);
      }
    }
    return result;
  }
}



