import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/homepage";
import CartPage from "./pages/cart/cartpage";
import Layout from "./layout/layout";
import CartProvider from "./context/cartprovider/cartprovider";
import { ToastContainer } from "react-toastify";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/signup Page/signUpPage";
import AuthProvider from "./context/auth/authProvider";
import ProfilePage from "./pages/profile/profilePage";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <Layout>
              <ToastContainer />
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/profile' element={<ProfilePage />} />

              </Routes>
            </Layout>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
