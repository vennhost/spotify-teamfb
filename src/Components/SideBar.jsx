import React, {Component} from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap'
import {Link} from 'react-router-dom'

class SideBar extends Component {
    state = {}

    render() {
        return (
            <Nav className="over" vertical>
                <NavItem>
                    <NavLink href="#">Charts</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">New Releases</NavLink>
                </NavItem>
            </Nav>
        );
    }
}

export default SideBar;