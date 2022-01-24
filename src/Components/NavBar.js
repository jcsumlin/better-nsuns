import React, {Component} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";

class NavBar extends Component {
    state = {
        open: false
    }


    render() {
        return (
            <Navbar color="faded" light>
                <NavbarBrand
                    className="me-auto"
                    href="/"
                >
                    nSuns
                </NavbarBrand>
                <NavbarToggler
                    className="me-2"
                    onClick={e => this.setState({open: !this.state.open})}
                />
                <Collapse navbar isOpen={this.state.open}>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/squats">
                                Squats
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/bench-press">
                                Bench Press
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/dead-lift">
                                Dead Lift
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/overhead-press">
                                Overhead Press
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/settings">
                                Settings
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavBar;
