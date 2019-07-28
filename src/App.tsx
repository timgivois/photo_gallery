import React from 'react'

import './App.scss'
import photo from './assets/photo-1.jpg'
import security from './assets/security.svg'
import worldMap from './assets/world-map.svg'

const App: React.StatelessComponent<{}> = () => (
  <div className='container'>
    <h1>Hello World, React!</h1>
    <div>
      <img src={photo} className='image' />
    </div>
    <div>
      <img src={security} className='image' />
      <img src={worldMap} className='image' />
    </div>
  </div>
)

export default App
