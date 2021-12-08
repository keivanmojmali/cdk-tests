const TodoController = require("../../todo.controller");
const TodoModel = require("../../model/todo.model");
const httpMocks = require("node-mocks-http");
const newTodo = require("../mock-data/new-todo.json")
let req, res, next;

TodoModel.create = jest.fn();

beforeEach(()=>{
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
})


describe("TodoController.createTodo", () =>{
    it("should have a createTodo function", ()=>{
        expect(typeof TodoController.createTodo).toBe("function");
    });

    it("should call TodoModel.create", ()=>{
        TodoController.createTodo(res,req,next);
        expect(TodoModel.create).toBeCalled(newTodo)
        req.body = newTodo;
        
    })
    it("should return 201 response code",()=>{
        req.body = newTodo;
        TodoController.createTodo(req,res,next);
        expect(res.statusCode).toBe(201)
        expect(res._isEndCalled()).toBeTruthy();
    })
});