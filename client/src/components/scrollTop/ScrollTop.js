import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../assets/styles/css/scrollTop.css';
import {Link} from 'react-scroll';

class ScrollTop extends Component {
    state = {
        status: 'unactive'
    }
    componentDidMount() {        
        const _self = this;
        window.addEventListener('scroll', scroll);

        function scroll() {
            let height = this.innerHeight;
            let scroll = this.scrollY;
            if(scroll>height) {
                _self.setState({status: 'active'})
            } else {
                _self.setState({status: 'unactive'})
            }
        }
    }
    render() {
        const {status} = this.state;
        if(status==='active') {
            return(
                <div className='scrollTop'>
                    <Link to='root'
                    smooth={true}
                    duration={800}>
                        <FontAwesomeIcon icon={['fas', 'angle-up']}/>
                    </Link>                    
                </div>
            )
        } else {
            return null;
        }
        
    }
}


export default ScrollTop;