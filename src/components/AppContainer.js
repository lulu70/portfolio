import React, { Fragment } from 'react'
import Header from './Header'
import SamplesContainer from './SamplesContainer'
import Footer from './Footer'
import About from './About'


const AppContainer = () => (
  <Fragment>
    <Header />
    <About />
    <SamplesContainer />
    <Footer />
  </Fragment>
)

export default AppContainer
