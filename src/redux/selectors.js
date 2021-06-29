export const getLoading = (state) => {
    return state.app.loading;
}

export const getGroupDescription = (state) => {
    return state.sum41.info.description;
}

export const getGroupBiography = (state) => {
    return state.sum41.info.biography;
}

export const getGroupAlbums = (state) => {
    return state.sum41.info.albums;
}

export const getGroupAlbum = (title) => (state) => {
    if (!state.app.loading) {
        return state.sum41.info.albums.find(album => album.title === title);
    }
}