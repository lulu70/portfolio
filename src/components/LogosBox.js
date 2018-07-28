import React from 'react'
import Logo from '../components/Logo'

const LogosBox = ({ logos }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    }}
  >
    {logos.map((logo, i) => <Logo key={i} logo={logo} />)}
  </div>
)

export default LogosBox
