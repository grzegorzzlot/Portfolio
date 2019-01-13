import React, { Component } from 'react';
import { UncontrolledAlert } from 'reactstrap';

class AlertContainer extends Component {
    render() {
        const { status } = this.props; 
        if(status==='EMAIL_SENT') {
            return(
                <UncontrolledAlert color="success">
                Twoja wiadomość została wysłana.
                </UncontrolledAlert>
            )
        } else if(status==='FAILED') {
            return(
                <UncontrolledAlert color="danger">
                Wystąpił problem podczas wysyłania wiadomości.
                </UncontrolledAlert>
            )
        } else {
            return null;
        }
    }
}

export default AlertContainer;