import { createBrowserRouter } from "react-router-dom";
import ProductsMain from "../Components/Pages/Products/ProductsMain";
import Main from "../Components/Main/Main";
import App from "../App";
import ShowAll from "../Components/Pages/Products/ShowALl/ShowAll";
import AddProduct from "../Components/Pages/Products/AddProduct/AddProduct";
import UpdateProduct from "../Components/Pages/Products/UpdateProduct/UpdateProduct";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/products",
                element: <ProductsMain />,
                children: [
                    {
                        index: true,
                        element: <ShowAll />,
                    },
                    {
                        path: "add-product",
                        element: <AddProduct />,
                    },
                    {
                        path: "update/:id",
                        element: <UpdateProduct />,
                    }
                ]

            },

        ]
    },

])



export default routes;