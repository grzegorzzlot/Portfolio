import React, {Component} from 'react';
import { Navbar, Container, Collapse, Nav, NavItem, NavbarToggler } from 'reactstrap';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    state = {
        collapsed: true
    };
    toggleNavbar = ()=>{
        this.setState({
          collapsed: !this.state.collapsed
        });
    }
    componentDidMount() {
        const windowWidth = window.outerWidth;
        this.toggleCollapse(windowWidth);
        window.addEventListener('resize', ()=>{
            const windowWidth = window.outerWidth;
            this.toggleCollapse(windowWidth);
        })
    }
    toggleCollapse = (windowWidth)=>{
        if(windowWidth<=768) {
            this.setState({collapsed: false})
        } else {
            this.setState({collapsed: true})
        }
    }
    render() {
        return(
            <Navbar>
                <Container>
                    <NavbarToggler className="hamburger" onClick={this.toggleNavbar}/>
                    <Collapse isOpen={this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <ScrollLink
                                to='me'
                                smooth={true}
                                duration={800}>O mnie</ScrollLink>
                            </NavItem>
                            <NavItem>
                                <ScrollLink
                                to='projects'
                                smooth={true}
                                duration={800}>Ostatnie projekty</ScrollLink>
                            </NavItem>
                            <NavItem><Link to='/portfolio'>Portfolio</Link></NavItem>
                            <NavItem>
                                <ScrollLink
                                to='contact'
                                smooth={true}
                                duration={800}>Kontakt</ScrollLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        )
    }
}
export default Navigation;