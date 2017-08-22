import React, { Component } from 'react';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/es/Button';

class NewEntryForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'Guest',
            text: ''
        }
    }

    onUsernameChange = (e) => this.setState({username: e.target.value});
    onTextChange = (e) => this.setState({text: e.target.value});
    
    saveEntry = (e) => {
        e.preventDefault();
        this.props.onSave(this.state.username, this.state.text);
    };

    render() {
        return (
          <form>
              <FormGroup controlId="username">
                  <ControlLabel>Your username</ControlLabel>
                  <FormControl
                    id="username"
                    type="text"
                    label="somelabel"
                    value={this.state.username}
                    onChange={this.onUsernameChange}
                  />
              </FormGroup>

              <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Your guestbook entry</ControlLabel>
                  <FormControl
                    componentClass="textarea"
                    value={this.state.text}
                    onChange={this.onTextChange}
                  />
              </FormGroup>

              <Button
                type="submit"
                bsStyle="primary"
                onClick={this.saveEntry}
              >

                  Save!
              </Button>
          </form>
        )
    }
}

export default NewEntryForm;
