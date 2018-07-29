import React from 'react'
import Sample from './Sample'
import ESOC2018Image from '../assets/samples/ESOC2018.png'
import workflowImage from '../assets/samples/workflow.png'
import lensItImage from '../assets/samples/Lensit.png'
import bgImage from '../assets/codeBG.png'
import WSAVA2017Image from '../assets/samples/WSAVA2017.png'
import smokeImage from '../assets/samples/smoke.png'
const SamplesContainer = () => (
  <div
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    }}
  >
      <Sample
        image={ESOC2018Image}
        link="http://www.tpi-webcast.com/ESOC2018"
        title="ESOC 2018"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta veniam minima atque facilis numquam commodi officiis accusantium asperiores placeat consequuntur quasi perspiciatis, quam rerum iste quaerat reiciendis cum possimus ipsam quis. Quam vero sapiente, obcaecati recusandae blanditiis provident rem nisi alias quia veniam non fugit cumque asperiores at aliquam voluptatibus."
        bg="dark"
        logos={['html5', 'css3', 'js', 'node js', 'react', 'redux', 'firebase']}
      />
      <Sample
        image={workflowImage}
        link="https://test-dd126.firebaseapp.com/"
        title="Workflow-LE"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta veniam minima atque facilis numquam commodi officiis accusantium asperiores placeat consequuntur quasi perspiciatis, quam rerum iste quaerat reiciendis cum possimus ipsam quis. Quam vero sapiente, obcaecati recusandae blanditiis provident rem nisi alias quia veniam non fugit cumque asperiores at aliquam voluptatibus."
        bg="light"
        logos={['html5', 'css3', 'js', 'node js', 'react', 'redux', 'firebase']}
      />
      <Sample
        image={lensItImage}
        link="https://lensit-60c99.firebaseapp.com/"
        title="Lensit"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta veniam minima atque facilis numquam commodi officiis accusantium asperiores placeat consequuntur quasi perspiciatis, quam rerum iste quaerat reiciendis cum possimus ipsam quis. Quam vero sapiente, obcaecati recusandae blanditiis provident rem nisi alias quia veniam non fugit cumque asperiores at aliquam voluptatibus."
        bg="dark"
        logos={['html5', 'css3', 'js', 'node js', 'react', 'electron']}
      />
      <Sample
        image={WSAVA2017Image}
        link="http://www.tpi-webcast.com/WSAVA2017/"
        title="WSAVA 2017"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta veniam minima atque facilis numquam commodi officiis accusantium asperiores placeat consequuntur quasi perspiciatis, quam rerum iste quaerat reiciendis cum possimus ipsam quis. Quam vero sapiente, obcaecati recusandae blanditiis provident rem nisi alias quia veniam non fugit cumque asperiores at aliquam voluptatibus."
        bg="light"
        logos={['wordpress', 'css3']}
      />
      <Sample
        image={smokeImage}
        link="https://codepen.io/liorco70/full/KXRoBG"
        title="Smoke"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta veniam minima atque facilis numquam commodi officiis accusantium asperiores placeat consequuntur quasi perspiciatis, quam rerum iste quaerat reiciendis cum possimus ipsam quis. Quam vero sapiente, obcaecati recusandae blanditiis provident rem nisi alias quia veniam non fugit cumque asperiores at aliquam voluptatibus."
        bg="dark"
        logos={['html5', 'css3', 'js', 'p5']}
      />
  </div>
)

export default SamplesContainer