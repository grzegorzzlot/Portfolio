import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalWrapper extends Component {
    state = {
        modal: false
    }
    toggle = ()=>{
        this.setState({
            modal: !this.state.modal
        });
    }    
    render() {
        const { title, content } = this.props.data;
        return(
            <div>
                <Button onClick={this.toggle}>{title}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
                <ModalBody>
                    {content!==undefined?
                    <div dangerouslySetInnerHTML={{__html: content}}></div>
                    :
                    <span>Brak opisu</span>}                    
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Wróć</Button>
                </ModalFooter>
                </Modal>
            </div>
        )
    }
}
export default ModalWrapper;