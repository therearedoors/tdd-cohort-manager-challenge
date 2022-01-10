# Test-Driven Development

## Todo App

### Learning Objectives
- Use a test framework to help test code
- Use the Red Green Refactor loop to develop code
- Test-drive a program with multiple functions with unit tests

### Quickstart
1. Fork this repository
2. Clone your fork to your local machine (example command below, see note)
3. Install project dependencies

```sh
$ git clone git@github.com:[username]/tdd-todoList.git && cd tdd-todoList
$ npm ci # to install dependencies
```

### Instructions
1. Implement the below requirements by following a test-driven development process.
2. The `src/TodoList.js` files contains an empty class definition you can use as a starting point.
3. An initial spec file is provided in `spec/TodoList.spec.js`. You should add your tests to this file.
5. For each requirement below, write a single test and pass it by writing source code. Repeat until you have implemented all requirements.

### Requirements

You should be able to run this in your JS console (using your node REPL, or browser console). For any assumptions made, represent this in your domain model.

- Create a todo item that has an ID, text description, and starts off incomplete
- Get all todo items
- Set a todo completed by its ID
- Get only todo items that are incomplete
- Get only todo items that are complete
- Search and return a todo item by its ID, or return a message saying it doesn’t exist
- Remove a todo item by its ID


#### Example interactions
```sh
$ node
> const TodoList = require('./src/TodoList.js') // load your program into your REPL
undefined
> const todoList = new TodoList()
> todoList.create("Do the laundry")
{id: 1, text: "Do the laundry", status: "incomplete"}
> todoList.create("Make the bed")
{id: 2, text: "Make the bed", status: "incomplete"}
> todoList.setComplete(2)
{id: 2, text: "Make the bed", status: "complete"}
> todoList.setComplete(3)
"Todo item not found"
> todoList.getAll()
[{id: 1, text: "do laundry", status: "incomplete"}, {id: 2, text: "make the bed", status: "complete"}]
```

#### Further work

- Add a user interface to this app so you can run this from the command line (don't worry about test-driving this once your unit tests for your app logic are passing)
