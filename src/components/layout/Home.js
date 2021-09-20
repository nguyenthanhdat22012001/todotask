// import { Redirect } from "react-router-dom";
import React from 'react';
import LiskTask from '../task/ListTask';


class Home extends React.Component{
    constructor() {
        super();
        // this.state = {color: "red"};
      }
      render() {
        return (
            <div>
               <LiskTask/>
            </div>
        )
      }
}

export default Home