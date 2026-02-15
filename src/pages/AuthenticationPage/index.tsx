import { lazy, useState } from 'react'
import styles from './styles.module.css'

const SignIn = lazy(() => import('./SignIn'))
const SignUp = lazy(() => import('./SignUp'))

const AuthenticationPage = () => {
  const [isSignInView, setIsSignInView] = useState(true)
  return (
    <div className={styles.auth_container}>
      <div className={styles.auth_card}>
        <div className={styles.auth_body}>
          {isSignInView ? (
            <SignIn handleSignUpView={() => setIsSignInView(false)} />
          ) : (
            <SignUp handleSignInView={() => setIsSignInView(true)} />
          )}
        </div>
      </div>
    </div>
  )
}
export default AuthenticationPage
