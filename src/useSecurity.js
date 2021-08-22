import SecurityContext from './SecurityContext'
import { useContext } from 'react'

function useSecurity() {
  return useContext(SecurityContext)
}

export default useSecurity
