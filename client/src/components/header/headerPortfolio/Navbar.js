import React, {Component} from 'react';
import { Navbar, Container, Collapse, Nav, NavItem, NavbarToggler } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';

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
                                <Link to='/'>Strona główna</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/#me'>O mnie</Link>
                            </NavItem>                            
                            <NavItem>
                                <Link to='/#contact'>Kontakt</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        )
    }
}
export default Navigation;