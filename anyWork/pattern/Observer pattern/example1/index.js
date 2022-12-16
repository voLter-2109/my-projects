class observable {
  constructor() {
    this.observers = [];
  }

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observer) {
    this.observers = this.observers.filter((item) => item !== observer);
  }

  notifyObservers() {
    this.observers.forEach((item) => {
      debugger;
      item.update();
    });
  }
}

class Publisher extends observable {
  // приватное поле переменные задаются через #name
  constructor(name) {
    super();
    this.postText = "";
    this.textarea = document.forms[name].querySelector("textarea") || null;
    this.textarea.addEventListener("input", (e) => {
      this.setPostText(e.target.value);
    });
  }

  setPostText(text) {
    this.postText = text;
    this.notifyObservers();
  }

  getPostText() {
    return this.postText;
  }
}

class Reader {
  constructor(id) {
    this.publisher = null;
    this.contentarea = document
      .querySelector(id)
      .querySelector(".readers__publisher-content");
  }

  update() {
    this.contentarea.innerHTML = this.publisher.getPostText();
  }

  subsubcribe(publisher) {
    this.publisher = publisher;
  }

  unsubsubcribe() {
    this.publisher = null;
  }
}

const newyork = new Publisher("newyork");

const reader1 = new Reader("#Roma");
const reader2 = new Reader("#Vasya");
const reader3 = new Reader("#John");

newyork.attach(reader1);
reader1.subsubcribe(newyork);

newyork.attach(reader2);
reader2.subsubcribe(newyork);

newyork.attach(reader3);
reader3.subsubcribe(newyork);

newyork.detach(reader2);
reader2.unsubsubcribe();
