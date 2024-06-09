import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Header from "./pages/Header";
import { FooterPage } from "./pages/FooterPage";
import SignUp from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import Food from "./pages/Food";
import NewFood from "./pages/NewFood";
import SignOut from "./pages/SignOut";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route element={PrivateRoute}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/food" element={<Food />} />
            <Route path="/signout" element={<SignOut />} />
          </Route>
          <Route element={OnlyAdminPrivateRoute}>
            <Route path="/newfood" element={<NewFood />} />
          </Route>
        </Routes>
        <FooterPage />
      </BrowserRouter>
    </>
  );
}

export default App;
