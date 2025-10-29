import React from 'react'

interface State { hasError: boolean }

export default class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError() { return { hasError: true } }

  componentDidCatch(error: any, info: any) {
    console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="card bg-red-50 border border-red-200 text-red-700">
          <h3 className="text-lg font-semibold">Terjadi kesalahan</h3>
          <p>Silakan refresh atau coba lagi nanti.</p>
        </div>
      )
    }
    return this.props.children
  }
}
