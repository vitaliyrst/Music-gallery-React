import Main from "../components/Main/Main";
import News from "../components/News/News";
import Groups from "../components/Groups/Groups";

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
        path: '/groups',
        component: Groups,
        exact: true
    }
];

export default routes;