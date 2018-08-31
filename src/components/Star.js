import React from 'react'

const Star = ({ top, left, color, path }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      width="500"
      height="500"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        top,
        left
      }}
    >
      <g fill={color}>
        {/* {wordLetters.map((letter, i) => (
          <path key={i} d={letter} transform="translate(-1.41 -1.45)" />
        ))} */}
        <path
          d={path}
          fill={color}
          id="svg_1"
          stroke={color}
          strokeDasharray="null"
          strokeLinecap="null"
          strokeLinejoin="null"
          strokeWidth="null"
        />
      </g>
    </svg>
  )
}
export default Star
