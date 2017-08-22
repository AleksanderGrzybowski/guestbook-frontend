import React from 'react';
import { Panel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Entry = ({text, author}) => (
  <Panel header={author}>
      {text}
  </Panel>
);

export default Entry;
