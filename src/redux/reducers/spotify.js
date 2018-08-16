const initialState = {
  token: '',
  loggedIn: false,
  playlists: '',
  playlistNumber: '',
  userId: '',
  playlistId: ''
}

const spotify = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SPOTIFY_TOKEN': {
      return {
        ...state,
        token: action.token,
        loggedIn: true
      }
    }
    case 'GOT_PLAYLISTS': {
      return {
        ...state,
        userId: action.userId,
        playlistId: action.playlistId,
        playlists: action.playlists,
        playlistNumber: action.playlistNumber
      }
    }
    case 'CHANGE_PLAYLIST': {
      return {
        ...state,
        userId: action.userId,
        playlistId: action.playlistId,
        playlistNumber: action.playlistNumber
      }
    }
    default: {
      return state
    }
  }
}
export default spotify
