import React from 'react'
import { Image, Icon } from 'semantic-ui-react'
import reduxLogo from '../assets/reduxLogo.png'
import firebaseLogo from '../assets/firebaseLogo.png'
import electronLogo from '../assets/electronLogo.png'
import p5Logo from '../assets/p5Logo.png'
const colors = {
  js: '#f0db4f',
  html5: '#f1652a',
  css3: '#34a9dd',
  react: '#60dbfc',
  'node js': '#689f62',
  wordpress: '#d7dadf'
}
const Logo = ({ logo }) => {
  switch (logo) {
    case 'redux':
      return <Image src={reduxLogo} style={{ height: '29px' }} />
    case 'firebase':
      return <Image src={firebaseLogo} style={{ height: '29px' }} />
    case 'electron':
      return <Image src={electronLogo} style={{ height: '29px' }} />
      case 'p5':
      return <Image src={p5Logo} style={{ height: '29px' }} />
    default:
      return (
        <Icon name={logo} size="big" style={{ color: colors[logo] }} />
      )
  }
}
export default Logo
