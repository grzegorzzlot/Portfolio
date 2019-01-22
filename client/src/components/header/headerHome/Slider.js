import React, { Component } from 'react'; 
import { Carousel } from 'antd';
import backend from '../../../constants/backend.js';
import axios from 'axios';
import SliderBox from './SliderBox.js';

class Slider extends Component {
    state = {
        data: []
    }
    _isMounted = false
    componentDidMount() {
        this._isMounted = true
        const { api } = backend;
        axios.get(`${api}slider`)
        .then(res=>{
            if (this._isMounted) {
                this.setState({data: res.data});
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
        const { data } = this.state;
        const { url } = backend; 
        
        const items = data.map((i, index)=>
        <div key={index}>
            <div key={index} className='carousel-image' style={{backgroundImage: `url(${url+i.url})`}}>               
            </div> 
        </div>
        ) 
        return(
            <div className='slider-wrapper'>
                <Carousel effect="fade" vertical autoplay={true} dots={false}>
                    {items}                    
                </Carousel>
                <SliderBox />
            </div>
        )                
    }
}

export default Slider;