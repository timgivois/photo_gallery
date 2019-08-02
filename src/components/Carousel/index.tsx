import React from 'react'

import Image, { ImageProps } from '../Image'
import './Carousel.scss'

interface CarouselState {
    index: number;
}

interface CarouselProps {
    images: ImageProps[],

}

class Carousel extends React.Component<CarouselProps, CarouselState> {
    state = {
        index: 0
    }

    handlePrevClick: React.MouseEventHandler = () => {
        this.setState(({ index }) => ({ index: index - 1}))
    }

    handleNextClick: React.MouseEventHandler = () => {
        this.setState(({ index }) => ({ index: index + 1}))
    }

    render() {
        const image = this.props.images[this.state.index]
        return (
            <div className='Carousel-container'>
                <Image 
                    {...image}
                />
                <div className='Carousel-Buttons'>
                    <button onClick={this.handlePrevClick}>Previous</button>
                    <button onClick={this.handleNextClick}>Next</button>
                </div>
            </div>
        )
    }
}

export default Carousel