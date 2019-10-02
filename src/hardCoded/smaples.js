import React from 'react'
import smokeImage from '../assets/samples/smoke.png'
import TimerImage from '../assets/samples/Timer.png'
import theRealThing from '../assets/samples/theRealThing.png'
import chatroom from '../assets/samples/chatroom.png'
import lensItImage from '../assets/samples/Lensit.png'
import uuid from 'uuid'

const samplesArray = [
  {
    id: uuid.v4(),
    image: lensItImage,
    link: 'https://lensit.safeframeapps.com',
    title: 'Lensit',
    description: (
      <p>
        This project is a tool for calculating lens factors of video projectors.{' '}
        <br />
        It was build using react as a web tool, as a native windows and mac
        applications using electron, and as a native app using react-native and
        expo.
      </p>
    ),
    bg: 'dark',
    logos: [
      'html5',
      'css3',
      'js',
      'node js',
      'react',
      'electron',
      'react-native',
      'expo'
    ]
  },
  {
    id: uuid.v4(),
    image: TimerImage,
    link: 'https://timer.safeframeapps.com',
    title: 'Timer',
    description: (
      <p>
        This project is a timer tool that allow you to save the times for
        relaunching. <br />
        It was build using react as a web tool and later as a native windows and
        mac applications using electron.
      </p>
    ),
    bg: 'dark',
    logos: ['html5', 'css3', 'js', 'node js', 'react', 'electron']
  },
  {
    id: uuid.v4(),
    image: theRealThing,
    link: 'https://the-real-thing.safeframeapps.com/',
    title: 'The Real Thing',
    description: (
      <p>
        This project is a sample website that I made using react/redux for a
        realestate company. <br />
        Ive also created a CMS system using react and firebase to upload and
        edit posts for new offers. <br />
        The website features two languages - English and German.
      </p>
    ),
    bg: 'light',
    logos: ['html5', 'css3', 'js', 'node js', 'react', 'redux', 'firebase']
  },
  {
    id: uuid.v4(),
    image: chatroom,
    link: 'https://chat-room.safeframeapps.com/',
    title: 'Chat Room',
    description: (
      <p>
        This project is a sample chat room app that I made using react, graphql
        and firebase.
        <br />
        I've implemented a signup/login system using firebase auth and an apollo
        server with graphql subscribtions to handle the messages and files .
      </p>
    ),
    bg: 'light',
    logos: [
      'html5',
      'css3',
      'js',
      'node js',
      'react',
      'firebase',
      'graphql',
      'apollo'
    ]
  },
  // {
  //   id: uuid.v4(),
  //   image: ESOC2018Image,
  //   link: 'http://www.tpi-webcast.com/ESOC2018',
  //   title: 'ESOC 2018',
  //   description: (
  //     <p>
  //       This project is a video lectures website with lectures recorded from a
  //       live event. <br /> It was built using react/redux technologies and firebase
  //       realtime database. <br /> For this project there was a need for a CMS system
  //       that I've built for uploading the video links for this project and
  //       future ones.
  //     </p>
  //   ),
  //   bg: 'dark',
  //   logos: ['html5', 'css3', 'js', 'node js', 'react', 'redux', 'firebase']
  // },
  // {
  //   id: uuid.v4(),
  //   image: WSAVA2017Image,
  //   link: 'http://www.tpi-webcast.com/WSAVA2017/',
  //   title: 'WSAVA 2017',
  //   description: (
  //     <p>
  //       This project is a video lectures website with lectures recorded from a
  //       live event. <br /> It was built using wordpres.
  //     </p>
  //   ),
  //   bg: 'light',
  //   logos: ['wordpress', 'css3']
  // },
  {
    id: uuid.v4(),
    image: smokeImage,
    link: 'https://codepen.io/liorco70/full/KXRoBG',
    title: 'Smoke',
    description: (
      <p>
        This project is a creative coding experiment i made using p5js. <br />
        Its a particle system demonstration built with an object-oriented
        design.
      </p>
    ),
    bg: 'light',
    logos: ['html5', 'css3', 'js', 'p5']
  }
]

export default samplesArray
