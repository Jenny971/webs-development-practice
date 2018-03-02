import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class TimeSheetList extends React.Component {
  render() {
    return (
      <div>
        <ListGroup>
          <ListGroupItem active tag="a" href="#" action>Week</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Week 10.23-10.27 Contract A</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Week 10.30-11.5 Contract A</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Week 10.30-11.5 Contract B</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Week 10.30-11.5 Contract C</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}