import News from "../components/News/News";
import Gallery from "../components/Gallery/Gallery";
import Groups from "../components/Groups/Groups";
import Post from "../components/News/Post/Post";

const routes = [
    {
        path: '/news',
        Component: News,
        exact: true
    },
    {
        path: '/news/:id',
        Component: Post,
        exact: true
    },
    {
        path: '/groups',
        Component: Groups,
        exact: true
    },
    {
        path: '/3d-gallery',
        Component: Gallery,
        exact: true
    },
];

export default routes;