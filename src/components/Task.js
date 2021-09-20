import React from 'react';

class Task extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            task: props.task
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props.task);
        return {task: props.task };  
      }

    render() {
        return (
            <li className="task__item">
                <p className={this.state.task.done ? 'completeText' : 'task__item-desc'} >{this.state.task.title}</p>
                <img 
                className={this.state.task.done ? "task__item-btn opacity-0" : 'task__item-btn'} 
                onClick={()=> this.props.completeTask(this.state.task.id)} 
                src="./assets/check.png"
                alt="" />
                <img 
                className="task__item-btn" 
                onClick={()=> this.props.deleteTask(this.state.task.id)} 
                src="./assets/delete.png"
                alt="" />
            </li>
        )
    }
}

export default Task;