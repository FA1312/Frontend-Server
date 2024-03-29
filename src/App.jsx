import { Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';
import Navbar from './components/Navbar';
import { AuthProviderWrapper } from './context/auth.context';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import EditProduct from './components/EditProduct';
import AddProduct from './components/AddProduct';
import About from './components/About';
import Reviews from './components/Reviews';
import WebFont from 'webfontloader';
import Footer from './components/Footer';

WebFont.load({
  google: {
    families: ['Roboto:300,400,700', 'sans-serif'],
  },
});

function App() {
  return (
    <AuthProviderWrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />}></Route>
        <Route
          path="/product/:id/edit"
          element={
            <IsPrivate>
              <EditProduct />
            </IsPrivate>
          }
        ></Route>
        <Route
          path="/product/add"
          element={
            <IsPrivate>
              <AddProduct />
            </IsPrivate>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>

        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Footer />
    </AuthProviderWrapper>
  );
}

export default App;
