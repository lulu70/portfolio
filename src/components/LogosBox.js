import React from 'react'
import Logo from '../components/Logo'

const LogosBox = ({ logos, size }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
      }}
    >
      {logos.map((logo, i) => <Logo key={i} logo={logo} size={size} />)}
    </div>
  )
}
export default LogosBox
