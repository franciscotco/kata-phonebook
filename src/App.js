import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

// Component
import Home from './Component/Home';
import AddContact from './Component/AddContact';
import EditContact from './Component/EditContact';
import NoMatch from './Component/NoMatch';
import NavTopBar from './Component/NavTopBar';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="layout-app">
        <div className="container-app">
          <NavTopBar />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/addcontact" component={AddContact}/>
              <Route path="/editcontact" component={EditContact}/>
              <Route component={NoMatch}/>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;

 // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     greeting: ''
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({ name: event.target.value });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
  //     .then(response => response.json())
  //     .then(state => this.setState(state));
  // }
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <form onSubmit={this.handleSubmit}>
  //           <label htmlFor="name">Enter your name: </label>
  //           <input
  //             id="name"
  //             type="text"
  //             value={this.state.name}
  //             onChange={this.handleChange}
  //           />
  //           <button type="submit">Submit</button>
  //         </form>
  //         <p>{this.state.greeting}</p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }