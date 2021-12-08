const TodoController = require("../../todo.controller");
const TodoModel = require("../../model/todo.model");
const httpMocks = require("node-mocks-http");
const newTodo = require("../mock-data/new-todo.json")

TodoModel.create = jest.fn();

describe("TodoController.createTodo", () =>{
    it("should have a createTodo function", ()=>{
        expect(typeof TodoController.createTodo).toBe("function");
    });

    it("should call TodoModel.create", ()=>{
        let req, res, next;
        req = httpMocks.createRequest();
        res = httpMocks.createResponse();
        next = null;
        TodoController.createTodo(res,req,next);
        expect(TodoModel.create).toBeCalled()
        
    })

});