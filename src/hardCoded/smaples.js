import React from 'react'
import WSAVA2017Image from '../assets/samples/WSAVA2017.png'
import smokeImage from '../assets/samples/smoke.png'
import TimerImage from '../assets/samples/Timer.png'
import ESOC2018Image from '../assets/samples/ESOC2018.png'
import theRealThing from '../assets/samples/theRealThing.png'
import lensItImage from '../assets/samples/Lensit.png'
import uuid from 'uuid'

const samplesArray = [
  {
    id: uuid.v4(),
    image: theRealThing,
    link: 'https://the-real-thing.leoniko.net/',
    title: 'The Real Thing',
    description: (
      <p>
        This project is a sample website that I made using react/redux for a realestate company.  
        Ive also created a CMS system using react and firebase to upload and edit posts for new offers.
        The website features two languages - English and German.
      </p>
    ),
    bg: 'light',
    logos: ['html5', 'css3', 'js', 'node js', 'react', 'redux', 'firebase']
  },
  {
    id: uuid.v4(),
    image: ESOC2018Image,
    link: 'http://www.tpi-webcast.com/ESOC2018',
    title: 'ESOC 2018',
    description: (
      <p>
        This project is a video lectures website with lectures recorded from a
        live event. It was built using react/redux technologies and firebase
        realtime database. For this project there was a need for a CMS system
        that I've built for uploading the video links for this project and
        future ones.
      </p>
    ),
    bg: 'dark',
    logos: ['html5', 'css3', 'js', 'node js', 'react', 'redux', 'firebase']
  },

  {
    id: uuid.v4(),
    image: lensItImage,
    link: 'https://lensit.leoniko.net',
    title: 'Lensit',
    description: (
      <p>
        This project is a tool for calculating lens factors of video projectors. 
        It was build using react as a web tool and later as a native windows and mac applications 
        using electron.  
      </p>
    ),
    bg: 'dark',
    logos: ['html5', 'css3', 'js', 'node js', 'react', 'electron']
  },
  {
    id: uuid.v4(),
    image: WSAVA2017Image,
    link: 'http://www.tpi-webcast.com/WSAVA2017/',
    title: 'WSAVA 2017',
    description: (
      <p>
        This project is a video lectures website with lectures recorded from a
        live event. It was built using wordpres.
      </p>
    ),
    bg: 'light',
    logos: ['wordpress', 'css3']
  },
  {
    id: uuid.v4(),
    image: TimerImage,
    link: 'https://timer.leoniko.net',
    title: 'Timer',
    description: (
      <p>
        This project is a timer tool that allow you to save the times for relaunching. 
        It was build using react as a web tool and later as a native windows and mac applications 
        using electron. 
      </p>
    ),
    bg: 'dark',
    logos: ['html5', 'css3', 'js', 'node js', 'react', 'electron']
  },
  {
    id: uuid.v4(),
    image: smokeImage,
    link: 'https://codepen.io/liorco70/full/KXRoBG',
    title: 'Smoke',
    description: (
      <p>
        This project is a creative coding experiment i made using p5js.
        Its a particle system demonstration built with an object-oriented design. 
      </p>
    ),
    bg: 'light',
    logos: ['html5', 'css3', 'js', 'p5']
  }
]

export default samplesArray
