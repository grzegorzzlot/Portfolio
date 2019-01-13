import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import backend from '../../../constants/backend.js';
import patterns from '../../../constants/patterns.js';
import Loader from 'react-loader';
import AlertContainer from './Alerts.js';

const siteKey = '6LcEgnUUAAAAAKFz_nfQDf1TdOLlyBAWmCWBshMT'

class Contact extends Component {
    state = {
        name: '',
        email: '',
        title: '',
        content: '',
        isLoading: true,
        status: '',
        captchaWalid: true,
        isWalid: ''
    }
    _isMounted = false
    componentDidMount() {
        this._isMounted = true
    }
    handleName = (event)=>{this.setState({name: event.target.value, status: ''})}
    handleEmail = (event)=>{this.setState({email: event.target.value, status: ''})}
    handleTitle = (event)=>{this.setState({title: event.target.value, status: ''})}
    handleContent = (event)=>{this.setState({content: event.target.value, status: ''})}

    handleSubmit = (event)=>{       
        event.preventDefault();
        this.validate();                
    }

    asyncData = ()=>{
        const { name, email, title, content } = this.state;

        const url  = backend.mail;
        const data = {
            subject: title,
            html: `
                <h2>Autor: ${name}<h2></br>
                <h2>Email: ${email}</h2></br>
                <p>${content}</p>
                `
        } 
        const config = {
            'Content-Type': 'application/x-www-form-urlencoded'
        } 
        
        axios.post(url, data, config)
        .then(res=>{
            if (this._isMounted) {
                const { status } = res.data;
                if(status==='EMAIL_SENT' || status==='FAILED') {
                    this.setState({ isLoading: true });
                }
                this.setState({status: status});
            }           
        })
        .catch(err=>{
            console.log(err)
        })
    }

    validate = ()=>{
        const { name, email, title, content} = this.state;
        const { nameReg, mailReg } = patterns;
        let I = nameReg.test(name);
        let II = mailReg.test(email);
        let III = title.length>0;
        let IV = content.length>0;       
 
        if (I && II && III && IV) {
            this.setState({ isLoading: false, status: '', isWalid: 'VALID' });
            this.asyncData();    
        } else {
            this.setState({ status: 'FAILED', isWalid: 'NO_VALID' })
        }        
    }

    captchaHandle = ()=>{
        this.setState({captchaWalid: false})
    }
    captchaExpired = ()=>{
        this.setState({captchaWalid: true})
    }
    componentWillUnmount() {
        this._isMounted = false
    }

    render() { 
        const { captchaWalid, isWalid } = this.state;
        return(
            <section id="contact" className="contact">
            <Container>
                <AlertContainer status={this.state.status}/>
                <h2 className="section-heading">Kontakt</h2>
                <Form className="contact-form">
                    <FormGroup>
                        <Label>Imię i nazwisko:</Label>
                        <Input type="text" value={this.state.name} onChange={this.handleName.bind(this)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Email:</Label>
                        <Input type="email" value={this.state.email} onChange={this.handleEmail.bind(this)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Tytuł wiadomości:</Label>
                        <Input type="text" value={this.state.title} onChange={this.handleTitle.bind(this)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Treść wiadomości:</Label>
                        <Input type="textarea" value={this.state.content} onChange={this.handleContent.bind(this)}/>
                    </FormGroup> 
                    {isWalid==='NO_VALID'?                    
                    <Label className='validation-label'>Podaj poprawne dane w formularzu kontaktowym</Label>
                    :null}
                    <ReCAPTCHA className="captcha" sitekey={siteKey} onChange={this.captchaHandle} onExpired={this.captchaExpired}/>
                    {captchaWalid?
                    <Button color="default" disabled={true}>Wyślij wiadomość</Button>                    
                    :<Button onClick={this.handleSubmit} color="default" disabled={false}>Wyślij wiadomość</Button>
                    }
                                       
                    <Loader 
                        loaded={this.state.isLoading}
                        color="#05a081"  
                        >
                    </Loader>
                </Form>            
            </Container>
            </section>
        )
    }
}

export default Contact;