import Home from "../components/Home/Home";

import Members from "../components/Members/Members";

import Albums from "../components/Albums/Albums";
import Album from "../components/Albums/Album/Album";

import Gallery from "../components/3DGallery/Gallery";

import News from "../components/News/News";
import Post from "../components/News/Post/Post";

const routes = [
    {
        path: '/',
        Component: Home,
        exact: true
    },
    {
        path: '/members',
        Component: Members,
        exact: true
    },
    {
        path: '/albums',
        Component: Albums,
        exact: true
    },
    {
        path: '/albums/:album',
        Component: Album,
        exact: true
    },
    {
        path: '/gallery',
        Component: Gallery,
        exact: true
    },
    {
        path: '/news',
        Component: News,
        exact: true
    },
    {
        path: '/news/:post',
        Component: Post,
        exact: true
    },
];

export default routes;