import { lazy, Suspense, useState } from 'react'

const Home = lazy(() => import('./home'))
const About = lazy(() => import('./about'))
const Contact = lazy(() => import('./contact'))

export default function App() {
    const [page, setPage] = useState('home')

    const renderPage = () => {
        switch (page) {
            case 'about':
                return <About />
            case 'contact':
                return <Contact />
            default:
                return <Home />
        }  
    }

    return(
        <div>
            <h1>🌐 Demo Code Splitting & Lazy Loading</h1>

            <nav style={{ marginBottom: 20 }}>
                <button onClick={() => setPage('home')}>Home</button>
                <button onClick={() => setPage('about')}>About</button>
                <button onClick={() => setPage('contact')}>Contact</button>
            </nav>

            <Suspense fallback={<p>Loading...</p>}>
                {renderPage()}
            </Suspense>
        </div>
    )
}


// React.lazy()	Menunda pemanggilan file JS hingga benar-benar dibutuhkan
// Suspense	Menampilkan fallback UI sementara komponen dimuat