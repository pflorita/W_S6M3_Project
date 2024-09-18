import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const api_key = 'DEMO_KEY';
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;


function App() {
  const [apod, setApod] = useState();

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
        .then(res => {
          console.log(res.data);
          setApod(res.data);
        })
        .catch(err => {
          console.log(err.message);
        })
    }
    
    setApod( {
          "copyright": "\nNeil Corke; \nText: Natalia Lewandowska \n(SUNY Oswego)\n",
          "date": "2024-09-18",
          "explanation": "New stars are born from the remnants of dead stars. The gaseous remnant of the gravitational collapse and subsequent death of a very massive star in our Milky Way created the G296.5+10.0 supernova remnant, of which the featured Mermaid Nebula is part. Also known as the Betta Fish Nebula, the Mermaid Nebula makes up part of an unusual subclass of supernova remnants that are two-sided and nearly circular. Originally discovered in X-rays, the filamentary nebula is a frequently studied source also i...",
          "hdurl": "https://apod.nasa.gov/apod/image/2409/Mermaid_Corke_4205.jpg",
          "media_type": "image",
          "service_version": "v1",
          "title": "The Mermaid Nebula Supernova Remnant",
          "url": "https://apod.nasa.gov/apod/image/2409/Mermaid_Corke_1080.jpg"
        })
  }, [])
  if (!apod) return 'Fetching Photo of the day...'

  return (
    <section>
      <Card 
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
        />
        
    </section>
  )
}

export default App
