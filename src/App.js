import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Entry from './Entry';
import NewEntryForm from './NewEntryForm';
import * as api from './api';
import Spinner from './Spinner';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            entries: [],
            waiting: true
        }
    }

    componentDidMount() {
        this.refreshEntries();
    }

    refreshEntries = () => {
        this.setState({waiting: true});
        api.listEntries().then(entries => this.setState({entries, waiting: false}));
    };

    saveEntry = (username, text) => {
        this.setState({waiting: true});

        api.saveEntry(username, text).then(() => {
            this.refreshEntries();
        })
    };

    render() {
        const entries = this.state.entries.map(entry =>
          <Entry key={entry.id} author={entry.author} text={entry.text}/>
        );

        const view = this.state.waiting ? (
          <Spinner/>
        ) : (
          <div>
              {entries}

              <Row>
                  <Col md={8} mdPush={2}>
                      <NewEntryForm onSave={this.saveEntry}/>
                  </Col>
              </Row>
          </div>
        );

        return (
          <Grid>
              <Row>
                  <Col md={12}>
                      <h1 className="text-center">Guestbook</h1>
                  </Col>
              </Row>

              {view}

          </Grid>
        );
    }
}

export default App;
