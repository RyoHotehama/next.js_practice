import React, {useContext, useState, useEffect} from 'react'
import {onAuthStateChanged, GoogleAuthProvider, signInWithRedirect} from "firebase/auth";
import '../../components/fire'

const AuthContext = React.createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  const login = () => {
    const provider = new GoogleAuthProvider()
    return signInWithRedirect(provider)
  }

  const logout = () => {
    return signOut()
  }

  useEffect(() => {
    return onAuthStateChanged(user => {
        setCurrentUser(user)
        setLoading(false)
    })
},[])

const value = {
  currentUser,
  login,
  logout
}

return (
  <AuthContext.Provider value={value}>
      {loading ? <p>loading...</p> : children}
  </AuthContext.Provider>
)

}

export default AuthProvider
