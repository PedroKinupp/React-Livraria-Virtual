import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import BookDetails from "./pages/Book-Details";
import GenrePage from "./pages/Genre-Page";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <Login/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/BookDetails/:bookID',
                element: <BookDetails/>
            },
            {
                path: '/GenrePage/:Genre',
                element: <GenrePage/>
            }
        ]
    }
])

export default router