import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

// constant
import { ROOT, ADD_CONTACT, EDIT_CONTACT_LINK } from './constant';

// Component
import Home from './component/Home';
import AddContact from './component/AddContact';
import EditContact from './component/EditContact';
import NoMatch from './component/NoMatch';
import NavTopBar from './component/NavTopBar';

// Style
import './App.css';

class App extends React.PureComponent {
  render() {
    return (
      <div className="layout-app">
        <div className="container-app">
          <NavTopBar />
          <BrowserRouter>
            <Switch>
              <Route exact path={ROOT} component={Home}/>
              <Route path={ADD_CONTACT} component={AddContact}/>
              <Route path={EDIT_CONTACT_LINK} component={EditContact}/>
              <Route component={NoMatch}/>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
