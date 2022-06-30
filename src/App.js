import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/homepage";
import CartPage from "./pages/cart/cartpage";
import Layout from "./layout/layout";
import CartProvider from "./context/cartprovider/cartprovider";
import { ToastContainer } from "react-toastify";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/signup Page/signUpPage";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <CartProvider>
          <Layout>
            <ToastContainer />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/signup' element={<SignUpPage />} />
            </Routes>
          </Layout>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
