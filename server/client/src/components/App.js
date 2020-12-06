import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing'
import MainPage from '../pages/index'
import {WillForm} from '../components/Step_form/WillForm'


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render () {
        return (
            <div className="">
            <BrowserRouter> 
            <div>
            <Header/>
            <Route exact path="/" component={Landing} />
            <Route path="/create/will" component={WillForm}/>
            <Route path="/cc" component={MainPage}/>
            </div>
            </BrowserRouter>
            </div>
        );
        }
};

export default connect(null, actions)(App);