import '../listTask.scss'
import React from 'react';
import Task from '../components/Task'

class ListTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          task: '',
          tasks: []
        };
      }

      changeInput = (e) => {
        let value = e.target.value;
        //  let name = e.target.name;
        if (value.length < 0) {
          return;
        }
        let createTask = {
          title: value,
        }
        this.setState({ task: createTask });
        console.log(this.state.task)
      }
    
      addTask = () => {
        if (this.state.task === '') {
          return;
        }
        let id = this.state.tasks.length;
        this.state.tasks.push({ id: id, title: this.state.task.title, edit: false, done: false });
        let resetTask = {
          title: '',
        }
        this.setState({ task: resetTask });
        console.log(this.state.tasks)
      }
    
      deleteTask = (id) => {
        const newTasks = this.state.tasks.filter((item) => item.id !== id);
        this.setState({ tasks: newTasks });
      }
    
      editTask = (id) => {
        let task = this.state.tasks.find(item => item.id === id);
        task.edit = true;
        this.setState({ task: task });
        console.log(task)
      }
    
      completeTask =(id)=>{
        const tasks = this.state.tasks;
        tasks.forEach(item =>{
          if(item.id === id){
            item.done = true;
          }
        });
        this.setState({tasks:tasks});
      }
    
      render() {
        return (
            <div className="row task">
            <h2 className="task__title">{this.props.title}</h2>

            <div className="task__inner">
              <img
                className="task__img"
                src="./assets/plus.png"
                alt="add task"
                onClick={this.addTask} />
              <input className="task__input"
                type="text"
                name='task'
                value={this.state.task.title}
                onChange={this.changeInput}
                placeholder="task" />
            </div>

            <ul className="task_list">

              {
                this.state.tasks.map((item) => {
                  return <Task key={item.id} task={item} deleteTask={this.deleteTask} completeTask={this.completeTask} />
                })
              }

            </ul>

          </div>
        )
      }
}

export default ListTask;