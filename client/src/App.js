import React, { Component } from 'react';
import Routes from './Routes.js';
import {connect} from 'react-redux';
import {loadPost, loadTechnology} from './actions/index.js';
import backend from './constants/backend.js';
import axios from 'axios';
import ScrollTop from './components/scrollTop/ScrollTop.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './assets/styles/css/global.css';

library.add(fas, fab)

class App extends Component { 
    _isMounted = false
    componentDidMount() {
        this._isMounted = true
        const { api } = backend;
        axios.get(`${api}post`)
        .then(res=>{
            if (this._isMounted) {
                this.props.loadPost(res.data)
            }           
        })
        .catch(err=>{
            console.log(err)
        })
        axios.get(`${api}technology`)
        .then(res=>{
            if (this._isMounted) {
                this.props.loadTechnology(res.data)
            }           
        })
        .catch(err=>{
            console.log(err)
        })
    }
    componentWillUnmount() {
        this._isMounted = false
    }
    render() {
        return (
            <div>
                <Routes />
                <ScrollTop />
            </div>            
        );
    }
}
const mapDispatchToProps = { loadPost, loadTechnology }


export default connect(null, mapDispatchToProps)(App);
