import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class App extends Component {
    constructor(){
        super();
        this.state = {
            redirect: false,
            to: ''
        }
        this.toPanel = this.toPanel.bind(this);
    }

    toPanel(ev){
        ev.preventDefault();
        const name = ev.target.name;
        console.log(name);

        this.setState({
            redirect: true,
            to: [name]
        })
    }

  render() {
    let buttonNames = ['Main Title','Client Work','Consultancy Work','Inhouse products','About me','Contact']
    let buttons = buttonNames.map((butts, index) => {
        return <Button className='sup' name={butts.split(' ')[0].toLowerCase()} key={index} onClick={this.toPanel}>{butts}</Button>
    })

    return (
        this.state.redirect ? <Redirect to={'/' + this.state.to}/> :
      <div className="App">
          <h1>Admin Panel</h1>
          {buttons}
      </div>
    );
  }
}

export default App;
