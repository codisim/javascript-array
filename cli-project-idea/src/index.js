const { argv } = require("yargs");
const path = require("path");
const TODO = require("./Todo");
const { ADD, UPDATE, DONE, NEXT, LIST, FIND } = require("./cmd");
const { saveFile, readFile } = require("./utils");

const fileName = "../data.json";
const filePath = path.resolve(__dirname, fileName);

(function init() {
  const data = readFile(filePath) || [];
  const todo = new TODO(data);
  const { _: baseCommand } = argv;

  switch (baseCommand[0]) {
    case ADD: {
      todo.addItem(argv.text);
      console.log("Todo added message");
      saveFile(todo.list(), filePath);
      break;
    }

    case UPDATE: {
      todo.update(argv.id, argv.text);
      console.log("Todo updated message");
      saveFile(todo.list(), filePath);
      break;
    }

    case NEXT: {
      const item = todo.next();
      console.log(`${item.id} - ${item.text} - ${item.created}`);
      break;
    }

    case DONE: {
      const item = todo.done();
      console.log(`${item.id} - ${item.text} - ${item.created}`);
      saveFile(todo.list(), filePath);
      break;
    }

    case FIND: {
        const items = todo.find(argv.term);
        if (items.length === 0) {
            console.log("No Item found");
            break;
        }
        for (let i = 0; i < items.length; i++) {
            console.log(`${items[i].id} - ${items[i].text} - ${items[i].created}`);
        }
        break;
    }

     case LIST: {
        const items = todo.find(argv.term);
        if (items.length === 0) {
            console.log("Empty List");
            break;
        }
        for (let i = 0; i < items.length; i++) {
            console.log(`${items[i].id} - ${items[i].text} - ${items[i].created}`);
        }
        break;
    }

    default:
      throw new Error("Command not found");
  }
})();
