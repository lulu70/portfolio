import React from 'react'

const SpotifyIcon = ({ color, style = {}, size = 18, deg=0 }) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    style={style}
    transform={`rotate(${deg})`}
  >
    <path
      fill={color}
      d="M50.9288482,28.3686995 C40.6139223,22.2429099 23.5996824,21.6796628 13.7528525,24.668235 C12.1712611,25.1477974 10.4991074,24.2551616 10.020312,22.674325 C9.54075242,21.0919599 10.4326187,19.4209426 12.0153564,18.9402338 C23.3188247,15.5091649 42.1091547,16.1717636 53.9838913,23.2207587 C55.4065211,24.0648651 55.8727065,25.9021053 55.0297516,27.3220687 C54.1860323,28.7439428 52.3476568,29.213188 50.9288482,28.3686995 M50.5910548,37.4417921 C49.8677032,38.6160515 48.3323482,38.9840345 47.1592422,38.2633534 C38.5600315,32.9774668 25.4464645,31.4459238 15.2725406,34.5342297 C13.953465,34.9331646 12.5598763,34.1887919 12.1594154,32.8720012 C11.7616293,31.5529179 12.5056154,30.1616135 13.8227803,29.7607681 C25.4453181,26.2337867 39.8932454,27.9418698 49.7702628,34.0118696 C50.9429866,34.7340793 51.3121138,36.2702077 50.5910548,37.4417921 M46.6754793,46.1553085 C46.1003899,47.0983843 44.8726409,47.3937643 43.9330097,46.8190535 C36.4186355,42.2263353 26.9604208,41.1892576 15.8216459,43.7334225 C14.748273,43.9798909 13.6787213,43.3069749 13.4337829,42.2335956 C13.1876981,41.1605985 13.8579352,40.0906583 14.9336008,39.8457184 C27.1232036,37.0589064 37.5791315,38.2583858 46.0140309,43.4124404 C46.9544263,43.986769 47.2505687,45.2152896 46.6754793,46.1553085 M31.9998089,0 C14.3271776,0 0,14.3268811 0,31.9996179 C0,49.6742653 14.3271776,64 31.9998089,64 C49.6732045,64 64,49.6742653 64,31.9996179 C64,14.3268811 49.6732045,0 31.9998089,0"
    />
  </svg>
)

export default SpotifyIcon