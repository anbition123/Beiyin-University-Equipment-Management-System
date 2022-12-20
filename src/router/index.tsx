import { Components } from "antd/lib/date-picker/generatePicker";
import { lazy } from "react";

const login = lazy(()=>import('../views/login'));
const home = lazy(()=>import('../views/home'))

const routes = [
    {
        path:'/',
        component: home
    },
    {
        path:'/login',
        component: login
    }
]

export default routes