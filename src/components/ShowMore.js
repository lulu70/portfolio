import React from 'react'
import { colors, secondaryStyle } from '../styles/styles'
import { Label } from 'semantic-ui-react'

const ShowMore = ({interpolator, t, text, handleShowAllClick}) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        paddingTop: '0.5rem',
        margin: '0.5rem  0.5rem'
      }}
      onClick={handleShowAllClick}
    >
      <svg
        id="Capa_1"
        data-name="Capa 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 284 166"
        width="26"
        height="14"
      >
        <title>angle-arrow-down</title>
        <path
          fill={colors.secondary}
          d={interpolator(t)}
          transform="translate(-4 -5.38)"
        />
      </svg>
      <Label
        style={{
          ...secondaryStyle,
          background: 'rgba(0,0,0,0)'
        }}
      >
        {text}
      </Label>
    </div>
  </div>
)

export default ShowMore