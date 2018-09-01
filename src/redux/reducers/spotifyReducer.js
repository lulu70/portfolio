const initialState = {
  token: '',
  loggedIn: false,
  mediaType: 'playlists',
  items: '',
  itemIndex: '',
  userId: '',
  itemId: '',
  hasLoaded: false,
  loading: false
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
    case 'GOT_ITEMS': {
      return {
        ...state,
        userId: action.userId,
        itemId: action.itemId,
        items: action.items,
        itemIndex: action.itemIndex
      }
    }
    case 'CHANGE_ITEM': {
      return {
        ...state,
        userId: action.userId,
        itemId: action.itemId,
        itemIndex: action.itemIndex
      }
    }
    case 'SPOTIFY_BUTTON_LOADED': {
      return {
        ...state,
        hasLoaded: action.state
      }
    }
    case 'CHANGE_MEDIA_TYPE': {
      return {
        ...state,
        mediaType: action.mediaType
      }
    }
    case'SPOTIFY_LOGIN_BUTTON_TOOGLE_ANIMATION' : {
      return {
        ...state,
        loading: !state.loading
      }
    }
    default: {
      return state
    }
  }
}
export default spotify
