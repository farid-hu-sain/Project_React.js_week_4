import React, { useCallback } from 'react'
import { Routes, Route, Navigate, Link, NavLink } from 'react-router-dom'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Dashboard from './pages/Dashboard'
import Cart from './pages/Cart'
import Login from './pages/Login'
import useAuth from './hooks/useAuth'
import { useProducts } from './contexts/ProductContext'
import ErrorBoundary from './components/ErrorBoundary'

function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  return children
}

export default function App() {
  const { user, logout } = useAuth()
  const { cart } = useProducts()
  const onLogout = useCallback(() => logout(), [logout])

  const cartItemCount = cart.reduce((total, item) => total + item.qty, 0)

  return (
    <div className="app-shell">
      <nav className="flex items-center justify-between mb-6 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-4">
          <Link 
            to="/products" 
            className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2"
          >
            <span className="text-2xl">🛍️</span>
            Product Dashboard
          </Link>
          <NavLink 
            to="/products" 
            className={({isActive}) => 
              `px-4 py-2 rounded-lg font-medium transition-all duration-300 relative ${
                isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50'
              }`
            }
          >
            Products
          </NavLink>
          {user && (
            <NavLink 
              to="/dashboard" 
              className={({isActive}) => 
                `px-4 py-2 rounded-lg font-medium transition-all duration-300 relative ${
                  isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50'
                }`
              }
            >
              Dashboard
            </NavLink>
          )}
          {user?.role === 'user' && (
            <NavLink 
              to="/cart" 
              className={({isActive}) => 
                `px-4 py-2 rounded-lg font-medium transition-all duration-300 relative ${
                  isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50'
                }`
              }
            >
              Cart
              {cartItemCount > 0 && (
                <span className="cart-badge">{cartItemCount}</span>
              )}
            </NavLink>
          )}
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200">
                👋 Hi, {user.username} {user.role === 'admin' && '(Admin)'}
              </span>
              <button onClick={onLogout} className="btn-secondary">Logout</button>
            </>
          ) : (
            <NavLink 
              to="/login" 
              className={({isActive}) => 
                `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50'
                }`
              }
            >
              Login
            </NavLink>
          )}
        </div>
      </nav>

      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
          <Route path="*" element={
            <div className="card text-center py-12">
              <div className="text-6xl mb-4">🌊</div>
              <h3 className="text-xl font-semibold mb-2">Halaman Tidak Ditemukan</h3>
              <p className="text-slate-600 mb-4">Maaf, halaman yang Anda cari tidak ada.</p>
              <Link to="/products" className="btn-primary">Kembali ke Beranda</Link>
            </div>
          } />
        </Routes>
      </ErrorBoundary>

      <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-slate-500 bg-gradient-to-br from-blue-50 to-white">
        <div className="mb-2">💙</div>
        © 2025 Made by jason IT | Tema Biru
      </footer>
    </div>
  )
}