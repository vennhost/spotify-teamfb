import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Nav, Navbar} from "react-bootstrap";

class NavSpotify extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <Nav.Link className="Nav" href="/">Home</Nav.Link>
                        <Nav.Link className="Nav" href="#features">Features</Nav.Link>
                        <Nav.Link className="Nav" href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar>
            </>
        );
    }
}

export default NavSpotify;