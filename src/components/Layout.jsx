import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToHash from './ScrollToHash'

export default function Layout() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <main>
        <Suspense fallback={<p className="loading">Loading…</p>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
