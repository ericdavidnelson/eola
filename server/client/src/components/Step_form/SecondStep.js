import React, { Component } from 'react'
import { Form, Row, Col, Container, Button } from 'react-bootstrap'

export class Form2ndData extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
    render() {
      const { values, handleChange } = this.props;
        return (
          <Container>
            <Form>
              <Row>
                <Col>
                  <Form.Control 
                  placeholder="Name of your Executor" 
                  onChange={handleChange('executorName')}
                  defaultValue={values.executorName}
                  />
                </Col>
                <Col>
                  <Form.Control 
                  placeholder="A personal note" 
                  onChange={handleChange('noteField')}
                  defaultValue={values.noteField}
                  />
                </Col>
              </Row>
              <Button
              onClick={this.back}
              >
              Back
              </Button>
              <Button
              onClick={this.continue}
              >
              Continue
              </Button>
            </Form>
          </Container>
        )
    }
}

export default Form2ndData