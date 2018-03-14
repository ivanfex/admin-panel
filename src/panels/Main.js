import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { Redirect } from 'react-router-dom';
import {updateData} from './../db/helper';

class Main extends Component{
    constructor(){
        super();
        this.state = {
            back: false,
            title: '',
            subtitle: '',
            description: '',
            video: ''
        }
        this.back = this.back.bind(this);
        this.pushToDb = this.pushToDb.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    back(){
        this.setState({
            back: true
        })
    }

    pushToDb(ev){
        const look = this.state;
        const name = ev.target.name;
        const value = look[name];
        updateData('main', name, value);
    }

    handleOnChange(ev){
          ev.preventDefault();
          const value = ev.target.value;
          const name = ev.target.name;

          this.setState({
              [name]: value
          })
    }

    render(){
        console.table(this.state);
        return(
            this.state.back ? <Redirect to='/'/> :
            <div>
                <h1>Main</h1>
                <Form className="forms">
                    <FormGroup>
                      <Label>Title</Label>
                      <Input placeholder="Main title" name="title" onChange={ this.handleOnChange }/>
                      <Button name="title" onClick={ this.pushToDb }>Submit</Button>
                    </FormGroup>
                    <FormGroup>
                      <Label>Subtitle</Label>
                      <Input placeholder="Subtitle" name="subtitle" onChange={ this.handleOnChange }/>
                      <Button name="subtitle" onClick={ this.pushToDb }>Submit</Button>
                    </FormGroup>
                    <FormGroup>
                      <Label>Description</Label>
                      <Input placeholder="Description" name="description" onChange={ this.handleOnChange }/>
                      <Button name="description" onClick={ this.pushToDb }>Submit</Button>
                    </FormGroup>
                    <FormGroup>
                        <Label>Video Link</Label>
                        <Input placeholder="Video Link" name="video" onChange={ this.handleOnChange }/>
                        <Button name="video" onClick={ this.pushToDb }>Submit</Button>
                    </FormGroup>
                </Form>
                <Button onClick={ this.back }>Back</Button>
            </div>
        )
    }
}

export default Main;
