using backend.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    //localhost:3306/api/TodoListController
    [Route("api/[controller]")]
    [ApiController]
    public class TodoListController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;
        public TodoListController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetList()
        {
           var allList =  dbContext.TodoList.ToList();
            return Ok(allList);
        }

        // New endpoint to get todos by user ID
        [HttpGet]
        [Route("user/{userId:int}")]
        public IActionResult GetTasksByUserId(int userId)
        {
            var userTodos = dbContext.TodoList.Where(t => t.UserId == userId).ToList();
            return Ok(userTodos);
        }

        //[HttpGet]
        //[Route("{id:int}")]
        //public IActionResult GetTaskByID(int id)
        //{
        //    var todo = dbContext.TodoList.Find(id);
        //    if (todo == null)
        //    {
        //        return NotFound($"Todo item with ID {id} not found.");
        //    }
        //    return Ok(todo);
        //}
        
        [HttpPost]
        public IActionResult AddToList(AddToListDto addToListDto)
        {
            var todo = new Todo() { 
                UserId = addToListDto.UserId,
                Title = addToListDto.Title,
                Description = addToListDto.Description,
                IsCompleted = addToListDto.IsCompleted,
                priority = addToListDto.Priority,
                CreatedAt = addToListDto.CreatedAt,
                CompletedAt = addToListDto.CompletedAt
            };

            dbContext.TodoList.Add(todo);
            dbContext.SaveChanges();
            return Ok(todo);
        }

        [HttpPut]
        [Route("{id:int}")]
        public IActionResult UpdateList(int id, AddToListDto updateListDto)
        {
            var todo = dbContext.TodoList.Find(id);
            if (todo == null)
            {
                return NotFound($"Todo item with ID {id} not found.");
            }
            
            // Optional: Verify that the todo belongs to the user
            if (todo.UserId != updateListDto.UserId)
            {
                return Forbid("You can only update your own todos.");
            }
            
            todo.Title = updateListDto.Title;
            todo.Description = updateListDto.Description;
            todo.IsCompleted = updateListDto.IsCompleted;
            todo.priority = updateListDto.Priority;
            todo.CreatedAt = updateListDto.CreatedAt;
            todo.CompletedAt = updateListDto.CompletedAt;
            
            dbContext.TodoList.Update(todo);
            dbContext.SaveChanges();
            return Ok(todo);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public IActionResult DeleteList(int id)
        {
            var todo = dbContext.TodoList.Find(id);
            if (todo == null)
            {
                return NotFound($"Todo item with ID {id} not found.");
            }
            dbContext.TodoList.Remove(todo);
            dbContext.SaveChanges();
            return Ok($"Todo item with ID {id} deleted successfully.");
        }
    }
}
