import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './panels/Main';
import Client from './panels/Client';
import Consult from './panels/Consult';
import Inhouse from './panels/Inhouse';
import About from './panels/About';
import Contact from './panels/Contact';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
          <Route exact path="/" name="Login Page" component={App}/>
          <Route exact path="/main" name="Main" component={Main}/>
          <Route exact path="/client" name="Client" component={Client}/>
          <Route exact path="/consultancy" name="Consult" component={Consult}/>
          <Route exact path="/inhouse" name="In-house" component={Inhouse}/>
          <Route exact path="/about" name="About" component={About}/>
          <Route exact path="/contact" name="Contact" component={Contact}/>
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
