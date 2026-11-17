import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import Chart from './Chart.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/charts",
    element: <Chart />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
