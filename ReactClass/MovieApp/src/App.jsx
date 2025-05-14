import './App.css';
import {RouterProvider} from "react-router"
import routes from "./router/routes.jsx";
function App() {

  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App
