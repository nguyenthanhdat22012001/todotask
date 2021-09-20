
import './App.scss';
import React from 'react';
// import axios from 'axios';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Home from './components/layout/Home';
// import Menu from './components/layout/Menu';
// import FormTask from './components/task/FormTask';
// import Auth from './views/Auth';
import ListTask from './components/ListTask'


class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <div className="container d-flex">
          <ListTask title="Đi làm" /> 
           <ListTask title="Đi chợ" /> 
        </div>

      </div>
    )
  }
}

export default App;

// class App extends React.Component{
//   state = {image:[]};
//     OnFormSubmit = async (term)=>{
//      const respone = await axios.get('https://api.unsplash.com/search/photos',{
//         params: term,
//         headers:{
//           Authorization: 'Client-ID tcQgpfWZfXBztK5iKO_-Cusz7KBFqdmvdnkRQKJFW4E',
//         },
//       });

//       console.log(respone.data.results);
//       this.setState({image: respone.data.results})
//     };

//     render() {
//       return (
//         <div>

//           <Menu/>

//           <div className="container mt-4">
//           <div className="row">
//             <div className="col-lg-4">
//                 {/* form */}
//                 <FormTask onSubmit={this.OnFormSubmit} />
//             </div>
//             <div className="col-lg-6 offset-lg-1 mt-4">
//               <Router>
//                     <Switch>
//                         <Route exact path="/" component={Home} />
//                         {/* <Route exact path="/login" render={props => <Auth {...props} authRoute="login" />} />
//                         <Route exact path="/register" render={props => <Auth {...props} authRoute="register" />} /> */}
//                     </Switch>
//               </Router>
//             </div>
//           </div>
//           </div>
//         </div>
//       )
//     }
// }