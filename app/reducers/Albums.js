const Albums = (state = { albums: [] }, action) => {
  switch (action.type) {
    case 'ALBUMS_FEATCH_SUCCESSED':
      return {
        albums: action.payload.albums
      }
    default:
      return state
  }
}

export default Albums;
