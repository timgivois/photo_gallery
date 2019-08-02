import React from 'react'

import './Image.scss';
export interface ImageProps {
    url: string;
    description: string;
}

const Image: React.StatelessComponent<ImageProps> = ({ url, description}) => {
    return (
        <figure className='Image'>
            <img src={url} />
            <figcaption>{description}</figcaption>
        </figure>
    )
} 

export default Image