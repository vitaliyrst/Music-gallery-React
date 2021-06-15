import Main from "../components/Main/Main";
import News from "../components/News/News";
import Gallery from "../components/Gallery/Gallery";

const routes = [
    {
        path: '/',
        component: Main,
        exact: true
    },
    {
        path: '/news',
        component: News,
        exact: true
    },
    {
        path: '/gallery',
        component: Gallery,
        exact: true
    }
];

export default routes;