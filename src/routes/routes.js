import News from "../Page/News/News";
import About from "../Page/About/About"
import Detail from "../Page/Detail/Detail";
import Main from "../Page/Main";
import Contact from "../Page/Contact/Contact";

export const routes = [
    {
        path: '/',
        element: Main
    },
    {
        path: '/detail/:id',
        element: Detail
    },
    {
        path: '/about',
        element: About
    },
    {
        path: '/news',
        element: News
    },
    {
        path: '/contact',
        element: Contact
    }
]