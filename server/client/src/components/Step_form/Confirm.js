import React, { Component } from 'react';
import { Button } from 'react-bootstrap';



export class ConfirmData extends Component {
    
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
          <div>
              <document>
              {values.firstName}
              <br/>
              {values.lastName}
              Email:
              {values.email}
              </document>
              <Button
              onClick={this.back}
              >
              Back
              </Button>
              <Button
              onClick={this.continue}
              >
              Confirm & Continue
              </Button>
            </div>  
        )
    }
}

export default ConfirmData