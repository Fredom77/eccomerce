import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
  // Asegúrate de que esta línea esté presente

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
  },
]);

export default router;
