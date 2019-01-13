import React from 'react';
import { Col } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FindMe = ()=>{
    return(
        <Col xs="12" md="4">
            <h3>Znajdź mnie na:</h3>
            <div className='socials'>
                <a className='tile fb' target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={['fab', 'facebook-f']}/>
                </a> 
                <a className='tile github' target="_blank" rel="noopener noreferrer" href="https://github.com/grzegorzzlot/">
                    <FontAwesomeIcon icon={['fab', 'github']}/>
                </a>
                <a className='tile linkedin' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/grzegorzzlot/">
                    <FontAwesomeIcon icon={['fab', 'linkedin-in']}/>
                </a>
                <a className='tile google' target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={['fab', 'google-plus-g']}/>
                </a>
            </div>
            <div className='tel'>
                <FontAwesomeIcon icon={['fas', 'mobile-alt']}/> 
                <p>662 213 958</p>   
            </div>
            <div className='mail'> 
                <FontAwesomeIcon icon={['fas', 'envelope']}/>
                <p>gzlot@wp.pl</p>
            </div>
        </Col>
    )
}

export default FindMe;