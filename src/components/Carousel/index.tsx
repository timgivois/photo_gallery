import React from 'react'

import { Button } from 'semantic-ui-react'
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
        const isPrevDisabled = this.state.index === 0
        const isNextDisabled = this.state.index === this.props.images.length - 1
        return (
            <div className='Carousel-container'>
                <Image 
                    {...image}
                />
                <div className='Carousel-Buttons'>
                    <Button primary disabled={isPrevDisabled} onClick={this.handlePrevClick}>Previous</Button>
                    <Button primary disabled={isNextDisabled} onClick={this.handleNextClick}>Next</Button>
                </div>
            </div>
        )
    }
}

export default Carousel