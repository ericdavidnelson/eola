import React from 'react'
import { Modal, Nav, Button, Row } from 'react-bootstrap'
import { Route } from 'react-router-dom'

 function LoginModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            How would you like to login?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body 
        centered>
        <Row>
        <a href="/auth/google">Login with Google</a>
        </Row>
        <Row>
        <a href="/auth/facebook">Facebook Placeholder</a>
        </Row>
        <Row>
         <a href="/email">Email</a>
        </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button>Sign up for an account</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
export function ModalShow() {
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <div>
        <Nav.Link onClick={() => setModalShow(true)}>Login</Nav.Link>
        <LoginModal 
        show={modalShow}
        onHide={()=> setModalShow(false)}
        />
        </div>
    );

}