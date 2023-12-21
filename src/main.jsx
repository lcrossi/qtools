import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Tools from './pages/tools/index.jsx';
import About from './pages/about/index.jsx';
import Error404 from './pages/error/errorPage404.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        //Se adicionar a '/' no path, ele vai entender como um objeto filho e sera renderizado dentro do App caso se adicione o Outlet na pag do App
        path: "tools",
        element: <Tools/>,
      },
      {
        path: "about",
        element: <About/>,
      },
    ]
  }
//  Usar o Outlet em App para gerar os children conforme a URL. VIde: https://www.youtube.com/watch?v=7b42lVMdEjE 
]); */

const router = createBrowserRouter([
  {
    path: "/qtools",
    element: <App/>,
    errorElement: <Error404/>
  },
  {
    path: "tools",
    element: <Tools/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
