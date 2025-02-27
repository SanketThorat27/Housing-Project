
import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import Signup from './signup/Signup';
import HomePage from './HomePage/HomePage';
import ContactUs from './ContactUsPage/ContactUs';
import PredictPrice from './PredictPrice/PredictPrice';

function App() {
  const route=createBrowserRouter([
    {path:"/",element:<Signup/>},
   
    {path:"/HomePage",element:<HomePage/>},
    {path:"/ContactUs", element:<ContactUs/>},
    {path:"/PredictPrice", element:<PredictPrice/>} 
  ])
  return (
    <div className="App">
    <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
