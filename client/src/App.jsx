import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Header from "./pages/Header";
import { FooterPage } from "./pages/FooterPage";
import SignUp from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <FooterPage />
      </BrowserRouter>
    </>
  );
}

export default App;
