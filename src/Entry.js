import React from 'react';
import { Panel } from 'react-bootstrap';

const Entry = ({text, username}) => (
  <Panel header={username}>
      {text}
  </Panel>
);

export default Entry;
