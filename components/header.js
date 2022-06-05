import {useAuth} from "../pages/fire/AuthContext"

export default function Header() {
  const {currentUser, login, logout} = useAuth()

  const handleLoginButton = () => {
    login()
  }

  const handleLogoutButton = () => {
    logout()
  }

  return (
    <div>
      {!currentUser &&
        <button onClick={handleLoginButton}>ログイン</button>
      }
      {currentUser &&
        <button onClick={handleLogoutButton}>ログアウト</button>
      }
    </div>
  )
}