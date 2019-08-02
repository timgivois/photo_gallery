import React from 'react'

import Carousel from './components/Carousel'
import { ImageProps } from './components/Image'
import photo1 from './assets/photo-1.jpg'
import photo2 from './assets/photo-2.jpg'
import photo3 from './assets/photo-3.jpg'
import photo4 from './assets/photo-4.jpg'
import photo5 from './assets/photo-5.jpg'
import './App.scss'

const photos: ImageProps[] = [
  {
    url: photo1,
    description: 'Photo 1. Salar de Uyuni, Bol.'
  },
  {
    url: photo2,
    description: 'Photo 2. Salar de Uyuni, Bol.'
  },
  {
    url: photo3,
    description: 'Photo 3. Salar de Uyuni, Bol.'
  },
  {
    url: photo4,
    description: 'Photo 4. Salar de Uyuni, Bol.'
  },
  {
    url: photo5,
    description: 'Photo 5. Salar de Uyuni, Bol.'
  }
]

const App: React.StatelessComponent<{}> = () => (
  <div className='container'>
    <h1>Hello World, React!</h1>
    <Carousel 
      images={photos}
    />
  </div>
)

export default App
