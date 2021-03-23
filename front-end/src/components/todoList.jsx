import { Component } from "react";
 import Tasklist from "./taskList";
import taskUrl from "../apicalls/taskEndpoints"
import "../styles/todoList.css";
import FlipMove from "react-flip-move";

class Todolist extends Component {
  state = {
    taskList: [],
  };
  submitForm = (event) => {
    event.preventDefault();
    fetch(taskUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ taskName: event.target.task.value }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if(data.data){
        let taskList = [...this.state.taskList];
        taskList.push(data.data);
        this.setState({ taskList: taskList });
        }
        else{
          alert(data.message)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  deleteTask = (event) => {
    let id = event.target.parentNode.querySelector("p").id;
    fetch(taskUrl + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let tasksList = [...this.state.taskList];
        let result = tasksList.findIndex((task) => {
          return task.taskId === data.taskId;
        });
        tasksList.splice(result , 1);
        this.setState({ taskList: tasksList });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  updateTask = (event)=>{
    let id = event.target.parentNode.querySelector("p").id;
    fetch(taskUrl + id,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ taskName: event.target.parentNode.parentNode.querySelector("input").value }),
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
    })
    .catch((err) => {
      console.log(err);
    });
  };
  updateStatus = (event)=>{
    let id = event.target.parentNode.querySelector("p").id;
    fetch(taskUrl + id,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ taskName: event.target.parentNode.parentNode.querySelector("input").value }),
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
    })
    .catch((err) => {
      console.log(err);
    });
  };

  componentDidMount = (event) => {
    fetch(taskUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        this.setState({ taskList: [...data.data] });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidUpdate = (event) => {
    fetch(taskUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        this.setState({ taskList: [...data.data] });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="todo-app">
        <h1>Todo App</h1>
        <form className="todo-form" onSubmit={this.submitForm}>
          {/* <label htmlFor="task">Enter Task</label> */}
          <input className="todo-input" type="text" name="task" placeholder="Add a Todo"/>
          <input className="todo-button" type="submit" value="Add task" />
        </form>
        <p>Task list</p>
        {this.state.taskList.map((task) => {
          return (
            <Tasklist
              key={task.taskId}
              task={task}
              deleteTask={this.deleteTask}
              updateTask={this.updateTask}
              updateStatus={this.updateStatus}
            />
          );
        })}
      </div>
  
    );
  }
}

export default Todolist;
