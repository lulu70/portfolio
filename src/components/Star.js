import React from 'react'

const Star = ({ top, left, color }) => {
  const starPath =
    'm50.99993,3.32319l11.466356,32.98708l34.915717,0.711542l-27.829153,21.098519l10.112971,33.427083l-28.66589,-19.94733l-28.665755,19.94733l10.112881,-33.427083l-27.829316,-21.098519l34.915879,-0.711542l11.466311,-32.98708l11.466356,32.98708z'
  // const laptopPath_1 =
  //   'M490.6,384.6H21.4a10.4,10.4,0,0,0,0,20.8H490.5a10.4,10.4,0,0,0,.1-20.8Z'
  // const laptopPath_2 =
  //   'M65.3,367.7H446.7a10.39,10.39,0,0,0,10.4-10.4V116.9a10.39,10.39,0,0,0-10.4-10.4H65.3a10.39,10.39,0,0,0-10.4,10.4V357.3a10.33,10.33,0,0,0,10.4,10.4ZM75.7,127.4H436.3V346.9H75.7V127.4Z'
  return (
    <svg
    //   viewBox="0 0 489.9 298.9"
      width="200"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        top,
        left
      }}
    >
      <g>
        <path
          d={starPath}
          fill="none"
          id="svg_1"
          stroke={`hsl(0 0% ${color}%)`}
          strokeDasharray="null"
          strokeLinecap="null"
          strokeLinejoin="null"
          strokeWidth="2"
        />
      </g>
    </svg>
    // <svg viewBox="0 0 489.9 298.9">
    //   <path
    //     d="M490.6,384.6H21.4a10.4,10.4,0,0,0,0,20.8H490.5a10.4,10.4,0,0,0,.1-20.8Z"
    //     transform="translate(-11 -106.5)"
    //   />
    //   <path
    //     d="M65.3,367.7H446.7a10.39,10.39,0,0,0,10.4-10.4V116.9a10.39,10.39,0,0,0-10.4-10.4H65.3a10.39,10.39,0,0,0-10.4,10.4V357.3a10.33,10.33,0,0,0,10.4,10.4ZM75.7,127.4H436.3V346.9H75.7V127.4Z"
    //     transform="translate(-11 -106.5)"
    //   />
    // </svg>
  )
}
export default Star
