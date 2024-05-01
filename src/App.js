import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Basket from "./pages/Basket";
import Home from "./pages/Home";
import  StoreProvider  from "./context-reducer/StoreContext.js";

function App() {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;
