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
  wordpress: '#d7dadf',
  'facebook official': 'white',
  mail: 'white'
}
const Logo = ({ logo, size }) => {
  switch (logo) {
    case 'redux':
      return <Image src={reduxLogo} style={{ height: '29px' }} />
    case 'firebase':
      return <Image src={firebaseLogo} style={{ height: '29px' }} />
    case 'electron':
      return <Image src={electronLogo} style={{ height: '29px' }} />
    case 'p5':
      return <Image src={p5Logo} style={{ height: '29px' }} />
    case 'facebook official':
      return (
        <a
          href="https://www.facebook.com/lior2"
          target="blank"
        >
          <Icon
            name={logo}
            size={size || 'big'}
            style={{ color: colors[logo] }}
          />
        </a>
      )
      case 'mail' : 
      return (
        <a
          href="mailto:liorco7079@gmail?subject=Mail from SAFE FRAME website"
        >
          <Icon
            name={logo}
            size={size || 'big'}
            style={{ color: colors[logo] }}
          />
        </a>
      )
    default:
      return (
        <Icon
          name={logo}
          size={size || 'big'}
          style={{ color: colors[logo] }}
        />
      )
  }
}
export default Logo
