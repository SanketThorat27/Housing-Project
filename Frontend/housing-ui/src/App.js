import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signup from "./signup/Signup";
import HomePage from "./HomePage/HomePage";
import ContactUs from "./ContactUsPage/ContactUs";
import PredictPrice from "./PredictPrice/PredictPrice";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ProtectedRoute";
import DisplayAfterLogin from "./DisplayAfterLogin";
import CurrencyConverter from "./Currency/CurrencyConverter";


function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/" element={<Signup />} />
          
          <Route path="/" element={<ProtectedRoute>
            <DisplayAfterLogin/>
          </ProtectedRoute>}>
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="HomePage" element={<HomePage />} />
            <Route path="PredictPrice" element={<PredictPrice />} />
            <Route path="CurrencyConverter" element={<CurrencyConverter/>}/>
           
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
