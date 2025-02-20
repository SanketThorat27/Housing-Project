
import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import Signup from './signup/Signup';
import HomePage from './HomePage/HomePage';

function App() {
  const route=createBrowserRouter([
    {path:"/",element:<Signup/>},
   
    {path:"/HomePage",element:<HomePage/>}
  ])
  return (
    <div className="App">
    <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
