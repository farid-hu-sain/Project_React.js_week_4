import React, { createContext, useContext, useState, ReactNode } from 'react'

type Role = 'admin' | 'user'

interface User {
  username: string
  role: Role
}

interface AuthContextType {
  user: User | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
  redirectPath: string | null
  setRedirectPath: (path: string | null) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [redirectPath, setRedirectPath] = useState<string | null>(null)

  const login = async (username: string, password: string) => {
    // simulated async login
    await new Promise((r) => setTimeout(r, 250))
    if (username === 'admin' && password === 'admin') {
      setUser({ username: 'admin', role: 'admin' })
    } else {
      setUser({ username, role: 'user' })
    }
  }

  const logout = () => {
    setUser(null)
    setRedirectPath(null)
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      redirectPath, 
      setRedirectPath 
    }}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook export name: useAuth
export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}