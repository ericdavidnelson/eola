import React, { Component } from 'react';
import {Nav, NavDropdown, Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';
import { ModalShow } from './LoginModal';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <ModalShow />
            default:
                return <Nav.Link href="/api/logout">Logout</Nav.Link>;
        }
    }
    render() {
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand style={{color:"#eef4edff"}}>
            <Link to={this.props.auth ? '/dashboard' : '/'}>
            Eola
            </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/features">Features</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="/action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="/action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                {this.renderContent()}
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}

function mapStatetoProps({ auth }) {
    return { auth };
}


export default connect(mapStatetoProps)(Header);