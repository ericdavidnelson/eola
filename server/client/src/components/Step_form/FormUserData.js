import React, { Component } from 'react'
import { Form, Row, Col, Container, Button } from 'react-bootstrap'

export class FormUserData extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
    render() {
      const { values, handleChange } = this.props;
        return (
          <Container>
            <Form>
              <Row>
                <Col>
                  <Form.Control 
                  placeholder="First name" 
                  onChange={handleChange('firstName')}
                  defaultValue={values.firstName}
                  />
                </Col>
                <Col>
                  <Form.Control 
                  placeholder="Last name" 
                  onChange={handleChange('lastName')}
                  defaultValue={values.lastName}
                  />
                </Col>
              </Row>
              <Row>
              <Form.Control 
              type="email" 
              placeholder="email" 
              onChange={handleChange('email')}
              defaultValue={values.email}
              />
              </Row>
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

export default FormUserData
