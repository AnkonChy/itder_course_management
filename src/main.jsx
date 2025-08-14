import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderProvider from "./ContextAPIs/OrderProvider";
const queryClient = new QueryClient();
import "primereact/resources/themes/lara-light-cyan/theme.css";
import BasicProvider from "./ContextAPIs/BasicProvider.jsx";
import "aos/dist/aos.css";
import CartProvider from "./ContextAPIs/CartProvider.jsx";
import { Toaster } from "react-hot-toast";
import { LoaderProvider } from "./ContextAPIs/LoaderProvider.jsx";
import Loader from "./Components/Loader.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 <>
  <ToastContainer />
  <LoaderProvider> {/* Global Loader Provider */}
    <QueryClientProvider client={queryClient}>
      <OrderProvider>
        <BasicProvider>
          <CartProvider>
            <Loader /> {/* Global Loader component */}
            <RouterProvider router={Router} />
            <Toaster position="top-center" />
          </CartProvider>
        </BasicProvider>
      </OrderProvider>
    </QueryClientProvider>
  </LoaderProvider>
</>

);
