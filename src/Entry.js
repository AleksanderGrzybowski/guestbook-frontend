import React from 'react';
import { Panel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Entry = ({text, username}) => (
  <Panel header={username}>
      {text}
  </Panel>
);

export default Entry;
