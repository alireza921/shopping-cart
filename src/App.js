import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/homepage";
import CartPage from "./pages/cart/cartpage";
import Layout from "./layout/layout";
import CartProvider from "./context/cartprovider/cartprovider";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <CartProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/cart' element={<CartPage />} />
            </Routes>
          </Layout>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
