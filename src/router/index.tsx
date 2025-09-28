import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import Detail from "@/pages/Detail";
import Todo from "@/pages/Todo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/detail",
        element: <Detail />,
    },
    {
        path: "/todo",
        element: <Todo />,
    }
],
);

export default router;