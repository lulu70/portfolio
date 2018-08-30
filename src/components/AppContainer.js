import React, { Fragment } from 'react'
import Header from './Header'
import SamplesContainer from './SamplesContainer'
import Footer from './Footer'
import About from './About'

const AppContainer = () => (
  <Fragment>
    {/* <MotionTest /> */}
    {/* <TransitionMotionTest /> */}
    {/* <SpringKeyFrameTest /> */}
    <Header />
    <About />
    <SamplesContainer />
    <Footer />
  </Fragment>
)

export default AppContainer
