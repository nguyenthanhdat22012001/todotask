import React from 'react';

class LiskTask extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            brand: 'honda',
            color: 'red',
        };
      }

      changeColor = () =>{
            this.setState({color: 'blur'});
      }

      // componentDidMount(){
      //     setTimeout(() => {
      //       this.setState({color: 'yellow'});
      //     }, 1000);
      // }

      // getSnapshotBeforeUpdate(prevProps,PrevState){
      //   document.getElementById('beforeUpade').innerHTML = 'before update color '+ PrevState.color;
      // }

      // componentDidUpdate(){
      //   document.getElementById('didUpdated').innerHTML = 'did updated color '+ this.state.color;
      // }

      render() {
        return (
            <div>
                {/* <p>this is {this.state.brand} have color {this.state.color} </p>
                <button type="button" onClick={this.changeColor} class="btn btn-warning ">Edit</button>

                <p id="beforeUpade"></p>
                <p id="didUpdated"></p> */}

                <table class="table table-hover table-light">
                    <thead>
                        <tr>
                        <th scope="col">Task</th>
                        <th scope="col">Description</th>
                        <th scope="col"></th>
                        </tr>
                </thead>
                <tbody>
                <tr >
                    <td>mana land</td>
                    <td>Column content</td>
                    <td>
                        <button type="button" class="btn btn-warning ">Edit</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
                </tbody>
                </table>
            </div>
        )
      }
}

export default LiskTask