import React from 'react';
import ReactDOM from 'react-dom';

class FormTask extends React.Component{
    constructor(props){
        super(props);
        this.state = {term: 'hello'};
        // this.shoot =  this.shoot.bind(this);
        this.title = React.createRef();
    }

    onInputChange = (e)=>{
        this.setState({term: e.target.value});
    }

    onSubmitForm =(e) => {
        e.preventDefault();
        alert('you are submited '+this.state.term);
        //  ReactDOM.findDOMNode(this.refs.title);
       // console.log(this.title.placeholder);
    }

    render(){
        return(
            <form onSubmit={this.onSubmitForm}>
                <div class="form-group" >
                <label for="exampleInputEmail1" class="form-label mt-4">Title</label>
                <input type="text" class="form-control" value={this.state.term} onChange={this.onInputChange} ref={this.title} placeholder="Title Task" oldautocomplete="remove" autocomplete="off"></input>
                </div>
                <div class="form-group">
                    <label for="exampleTextarea" class="form-label mt-4">Description</label>
                    <textarea class="form-control"  rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-outline-info">Submit</button>
            </form>
        );
    };
}

export default FormTask;