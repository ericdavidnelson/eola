import React, { Component } from 'react';
import FormUserData from './FormUserData';
import SecondStep from './SecondStep'
import ConfirmData from './Confirm'
import ReactPDF from "@react-pdf/renderer";
import Quixote from '../pdftest'

export class WillForm extends Component {
    state = {
        step:1,
        firstName: '',
        lastName: '',
        email: ''
    }
    //Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    //Go to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    //Handle field changes
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }
    render() {
        const { step } = this.state;
        const { firstName, lastName, email, executorName, noteField } = this.state;
        const values = { firstName, lastName, email, executorName, noteField }
        switch (step) {
            case 1:
                return (
                    <FormUserData
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 2: 
                return(
                    <SecondStep
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 3:
                return(
                    <ConfirmData
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            default:
                return(<h1>Blablabla</h1>)
        }
    }
}

export default WillForm
