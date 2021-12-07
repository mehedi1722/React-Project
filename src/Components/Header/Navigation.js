import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class Navigation extends Component {
    state = {
        isNavOpen: false,
    }

    navToggle = () =>{
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render(){
        return (
            <div>
                <Navbar dark color="dark" expand='md'>
                    <div className="container">
                        <NavbarToggler onClick={this.navToggle} />
                        <NavbarBrand href="/">BR Restaurant</NavbarBrand>
                        <Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <Link to="/home" className="nav nav-link active">Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/menu" className="nav nav-link">Menu</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/about" className="nav nav-link">About</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/contact" className="nav nav-link">Contact</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
};


