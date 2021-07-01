//APP
export const getLoading = (state) => {
    return state.app.loading;
}

//GROUP
export const getGroupDescription = (state) => {
    return state.sum41.group.description;
}

export const getGroupBiography = (state) => {
    return state.sum41.group.biography;
}

export const getGroupAlbums = (state) => {
    return state.sum41.group.albums;
}

export const getGroupAlbum = (title) => (state) => {
    if (!state.app.loading) {
        return state.sum41.group.albums.find(album => album.title === title);
    }
}

//NEWS
export const getNews = (state) => {
    return state.news.news;
}

export const getCurrentPage = (state) => {
    return state.news.currentPage;
}

export const getCurrentPostsOnPage = (state) => {
    return state.news.currentPostsOnPage;
}

export const getTotalPosts = (state) => {
    return state.news.news.length;
}

export const getPost = (state) => {
    return state.news.post;
}