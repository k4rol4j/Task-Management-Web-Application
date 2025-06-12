import {Navigate, RouteObject, useRoutes} from "react-router-dom";
import {Layout} from "../components/Layout.tsx";
import {ToDoList} from "./todo/ToDoList.tsx";
import {ToDoForm} from "./todo/ToDoForm.tsx";
import {ErrorPage} from "./error/ErrorPage.tsx";
import {LoginPage} from "./login/LoginPage.tsx";
import {useIsLogged} from "../hooks/useIsLogged.ts";

const publicRoutes: RouteObject[] = [
    {
        path: "/",
        children: [
            {
                path: "/login",
                element: <LoginPage/>
            },
            {
                path: "*",
                element: <Navigate to="/login" replace/>
            }
        ]
    }
]
const privateRoutes: RouteObject[] = [
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/todo',
                element: <ToDoList/>
            },
            {
                path: '/todo/new',
                element: <ToDoForm/>
            },
            {
                path: '/todo/:id',
                element: <ToDoForm/>
            },
            {
                path: '*',
                element: <ErrorPage/>
            }
        ]
    }
]

export const Routing = () => {
    const isLogged = useIsLogged();
    console.log("Cookies value for 'is-logged':", isLogged);
    const routes = isLogged ? privateRoutes : publicRoutes;
    return useRoutes(routes);
};
