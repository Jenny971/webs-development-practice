import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class NoteForm extends React.Component {
  render() {
    return (
        <FormGroup>
            <Input type="textarea" name="text" id="Note" placeholder="Note"/>
            <Button outline color="primary">Submit</Button>{' '}
        </FormGroup>
    );
    }
}