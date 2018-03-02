import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import TimeSheetList from './components/TimeSheetList';
import TopNavbar from './components/TopNavbar';
import TimeSheetPagination from './components/TimeSheetPagination';
import NoteForm from './components/NoteForm';
import Calendar from './components/Calendar';
import ContactText from './components/ContactText';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopNavbar />
        </header>
        <Container>
          <Row>
            <Col>
              <Button outline color="primary">View History</Button>{' '}
            </Col>
          </Row>
          <hr className="my-2" />
          <Row>
            <Col sm="9">
              <TimeSheetList />
              <TimeSheetPagination />
            </Col>
            <Col sm="3">
              <Calendar />
              <NoteForm />
              <ContactText />
            </Col>
          </Row>
        </Container>

        <footer className="footer">
          <div className="container">
            <span className="text-muted">@Authright</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;

