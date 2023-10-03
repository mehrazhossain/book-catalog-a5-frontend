import { createBrowserRouter } from "react-router-dom"
import Home from "../page/Home";
import App from "../App";
import AllBooks from "../page/AllBooks";
import WishList from "../page/WishList";
import AddNew from "../page/AddNew";
import NotFound from "../page/NotFound";
import BookDetails from "../page/BookDetails";
import EditBook from "../page/EditBook";
import MyBooks from "../page/MyBooks";
import Signin from "../page/Signin";
import Signup from "../page/Signup";
import PrivateRoute from "./PrivateRoute";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/allBooks',
                element: <AllBooks />
            },
            {
                path: '/books/:id',
                element: <PrivateRoute> <BookDetails /></PrivateRoute>
            }
            ,
            {
                path: '/editbook/:id',
                element: <PrivateRoute><EditBook /></PrivateRoute>
            },
            {
                path: '/wishList',
                element: <PrivateRoute><WishList /></PrivateRoute>
            },
            {
                path: '/mybooks',
                element: <PrivateRoute> <MyBooks /></PrivateRoute>
            },
            {
                path: '/addNew',
                element: <PrivateRoute><AddNew /></PrivateRoute>
            },
            {
                path: "/signin",
                element: <Signin />
            },
            {
                path: "/signup",
                element: <Signup />
            },

            {
                path: "*",
                element: <NotFound />
            },
        ]
    },


]);

export default routes;