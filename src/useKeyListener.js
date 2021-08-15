import { useEffect } from 'react'

function useKeyListener(callback) {
  useEffect(() => {
    const listener = (e) => {
      e = e || window.event
      const tagName = e.target.localName || e.target.tagName
      if (tagName.toUpperCase() === 'BODY') {
        callback(e)
      }
    }
    document.addEventListener('keydown', listener, true)
    return () => document.removeEventListener('keydown', listener, true)
  }, [callback])
}

export default useKeyListener
