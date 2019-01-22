import React from 'react';
import { Container, Row } from 'reactstrap';
import HeaderPost from '../components/header/headerPost/HeaderPost.js';
import Footer from '../components/footer/Footer.js';
import '../assets/styles/css/Page404.css'

const Page404 = ()=>{
    return(
        <div className='error-404'>
            <HeaderPost />
                <div className='content'>
                    <Container>
                        <Row>
                            <h1>404</h1>
                            <span className='caption'>Podana strona nie isnieje</span>
                        </Row>
                    </Container>
                </div>                
            <Footer />
        </div>        
    )
}

export default Page404;