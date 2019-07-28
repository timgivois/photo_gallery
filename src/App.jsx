import React from 'react'

import './App.scss'
import photo from './assets/photo-1.jpg';

const App = () => (
    <div className='container'>
        <h1>Hello World, React!</h1>
        <div>
            <img src={photo} className='image' />
        </div>
    </div>
)

export default App;