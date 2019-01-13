import React, { Component } from 'react'; 
import { Carousel, CarouselItem } from 'reactstrap';
import backend from '../../../constants/backend.js';
import axios from 'axios';
import SliderBox from './SliderBox.js';

class Slider extends Component {
    state = {
        data: [],
        activeIndex: 0
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
    next = ()=>{
        const {data} = this.state;
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === data.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }
    
    previous = ()=>{
        const {data} = this.state;
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? data.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }
    componentWillUnmount() {
        this._isMounted = false
    }
    
    render() { 
        const { data, activeIndex } = this.state;
        const { url } = backend;  
        return(
            <Carousel
            className='carousel-fade'
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
            pause={false}
            >   
                <SliderBox />
                {data.map((i,index)=>
                    <CarouselItem
                    key={index}
                    >
                        <div className='carousel-image' style={{backgroundImage: `url(${url}${i.url})`}}></div>
                    </CarouselItem>                    
                )}
            </Carousel>
        )                
    }
}

export default Slider;