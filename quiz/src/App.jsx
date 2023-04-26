import FormData from "./Component/pages/FormData";
import Language from "./Component/pages/Language";
import Quiz from "./Component/pages/Quiz";
import ResultCard from "./Component/pages/ResultCard";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

function App() {
  const router = createBrowserRouter([
    {path:"/", element:<FormData/>},
    {path:"language", element:<Language/>},
    {path:"quiz/:quizID", element:<Quiz /> },
    {path:"result", element:<ResultCard/>}
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
