import Main from "../components/Main/Main";
import Gallery from "../components/Gallery/Gallery";
import Groups from "../components/Groups/Groups";

const routes = [
    {
        path: '/',
        Component: Main,
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