import { createBrowserRouter,RouterProvider,Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import StDashBoard from "./pages/StDashBoard"
import Courses from "./pages/Courses"

function App() {
const router = createBrowserRouter(
  [
    {
       path: "/",
       element: <Layout />,
       children: [
         {
          index: true,
          element: <Home />,
         },
         {
          path: "dashboard",
          element: <StDashBoard />
         },
         {
          path: "courses",
          element: <Courses />
         }
       ]
    }
  ]
)


  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
