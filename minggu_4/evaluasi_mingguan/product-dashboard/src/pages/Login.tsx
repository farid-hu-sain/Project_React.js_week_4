import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function Login() {
  const { login, user, redirectPath, setRedirectPath } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState<string | null>(null)
  const navigate = useNavigate()
  const location = useLocation()

  // Redirect ketika user sudah login
  useEffect(() => {
    if (user) {
      const from = redirectPath || location.state?.from || '/products'
      setRedirectPath(null)
      navigate(from, { replace: true })
    }
  }, [user, navigate, redirectPath, setRedirectPath, location.state])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErr(null)
    try {
      await login(username, password)
      // Redirect akan ditangani oleh useEffect di atas
    } catch (e: any) {
      setErr(e?.message ?? 'Login gagal')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">🔐</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Login ke Akun Anda</h3>
        <p className="text-sm text-gray-600 mt-1">Masuk untuk melanjutkan belanja</p>
      </div>
      
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input 
            placeholder="Masukkan username" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
            className="w-full rounded-lg border px-3 py-2 focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input 
            placeholder="Masukkan password" 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            className="w-full rounded-lg border px-3 py-2 focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {err && (
          <div className="alert-error">
            {err}
          </div>
        )}

        <div className="flex justify-between items-center pt-2">
          <button 
            type="button" 
            onClick={() => { setUsername('admin'); setPassword('admin') }} 
            className="btn-secondary text-sm"
          >
            Auto Fill Admin
          </button>
          <button 
            type="submit" 
            disabled={loading} 
            className="btn-primary px-6"
          >
            {loading ? (
              <span className="flex items-center">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Loading...
              </span>
            ) : (
              'Login'
            )}
          </button>
        </div>
      </form>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800 text-center">
          <strong>Tip:</strong> gunakan <code className="bg-blue-100 px-2 py-1 rounded border">admin/admin</code> untuk akses admin.
        </p>
      </div>
    </div>
  )
}