import { Component } from "react";
import "../styles/taskList.css";
class Tasklist extends Component {
  render() {
    return (

      <div className="todo-row animate__animated animate__fadeInLeft" key={this.props.task.taskId}>
        <p className={this.props.task.status} id={this.props.task.taskId}>{this.props.task.taskName}</p>
        <button className="edit-button" onClick={this.props.updateTask}>Edit</button>
        <button className="update-button" onClick={this.props.updateStatus}>Completed</button>
        <button className="delete-button" onClick={this.props.deleteTask}>Delete</button>
      </div>
    
    );
  }
}

export default Tasklist;
