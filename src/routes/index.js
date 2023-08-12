import Home from "../pages/Home/index.jsx";
import Shop from "../pages/Shop/index.jsx";
import AboutUs from "../pages/About Us/index.jsx";
import Contact from "../pages/Contact/index.jsx";
import Detail from "../pages/Product/Detail/index.jsx";
const publicRoutes = [
    {
        path : '/', component : Home
    },
    {
        path : '/shop', component : Shop
    },
    {
        path : '/about-us', component : AboutUs
    },
    {
        path : '/contact-us', component : Contact
    },
    {
        path : '/product/:id', component : Detail
    }

]


export {publicRoutes}