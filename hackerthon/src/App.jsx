import "./App.css";

import PaymentPage from "./pages/PaymentPage";
import RecommendPage from "./pages/OrderPage";
import StartPage from "./pages/StartPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />}></Route>
      <Route path="/order" element={<RecommendPage />}></Route>
      <Route path="/pay" element={<PaymentPage />}></Route>
    </Routes>
  );
}

export default App;
