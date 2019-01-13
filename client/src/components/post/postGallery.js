import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import backend from '../../constants/backend.js';

class postGallery extends Component {
    state = { activeIndex: 0 }

    next = () => {
        const { gallery } = this.props;
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === gallery.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous = () => {
        const { gallery } = this.props;
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? gallery.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex = (newIndex) => {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { url } = backend;
        const { activeIndex } = this.state;
        const { gallery } = this.props;
        let indicatorArr = []
        if(gallery.length>0) {
            gallery.forEach(i => {
                indicatorArr.push({ src: i })    
            });
        }

        const slides = gallery.map((i, index) => 
            <CarouselItem
            key={index}            
            >
            <img src={url+i} alt={i} />
            </CarouselItem>                    
        );

        return (
            <div>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={indicatorArr} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </div>
        )
    }
}

export default postGallery;