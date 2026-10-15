import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// pushState does not scroll to #fragments, so do it ourselves on every navigation.
export default function ScrollToHash() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash, key])

  return null
}
