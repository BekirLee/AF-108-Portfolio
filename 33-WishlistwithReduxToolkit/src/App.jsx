import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductsList from './assets/Components/ProductList'; // Ürün listesi
import Wishlist from './pages/Wishlist'; // Wishlist
import AuthForm from './features/auth/AuthForm';
import LogoutButton from './features/auth/LogoutButton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <div>
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <div>
                  <LogoutButton />
                  <ProductsList /> {/* Ürünleri listele */}
                  <Wishlist /> {/* Wishlist */}
                </div>
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
          <Route
            path="/auth"
            element={isAuthenticated ? <Navigate to="/" /> : <AuthForm />}
          />
        </Routes>
      </div>
    </Router>
  );
}
