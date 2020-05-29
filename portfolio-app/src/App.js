import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Footer from "./components/Footer";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Raymond Riter',
            headerLinks: [
                {title: 'Home', path: '/'},
                {title: 'About', path: '/about'},
                {title: 'Contact', path: '/contact'},
            ],
            home: {
                title: 'Aspiring in, Development/Cyber Security',
                subTitle: 'Projects, accomplishments that make a difference',
                text: 'Check my techistory below'
            },
            about: {
                title: 'About Me',

            },
            contact: {
                title: 'Let\'s Talk!'
            }
        }
    }

    render() {
        return (
            <Router>
                <Container className="p-0" fluid={true}>
                    <Navbar className="border-bottom" bg="transparent" expand="lg">
                        <Navbar.Brand>Raymond Riter</Navbar.Brand>
                        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto">
                                <Link className="nav-link" to="/">Home</Link>
                                <Link className="nav-link" to="/about">About</Link>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Footer />
                </Container>
            </Router>
        );
    }

}

export default App;
