import { useEffect } from 'react'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

function LoadingScreen() {
  useEffect(() => {
    Nprogress.start()

    return () => {
      Nprogress.done()
    }
  }, [])

  return ''
}

export default LoadingScreen
