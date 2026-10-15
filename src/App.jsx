import { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Research from './pages/Research'
import NotFound from './pages/NotFound'

// Carries react-markdown + KaTeX, so it loads only when a note is opened.
const Note = lazy(() => import('./pages/Note'))

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="research" element={<Research />} />
          <Route path="research/:slug" element={<Note />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
