const AuthenticationPage = () => {
  return (
    <div className='auth-container'>
      <div className='auth-card'>
        {/*  Header  */}
        <div className='auth-header'>
          <h1>📝 Notes App</h1>
          <p>Keep your thoughts organized</p>
        </div>

        {/*  Body  */}
        <div className='auth-body'>
          {/*  Messages  */}
          <div
            id='errorMessage'
            className='error-message'
          ></div>
          <div
            id='successMessage'
            className='success-message'
          ></div>

          {/*  Login Form  */}
          <div
            id='loginForm'
            className='form-container active'
          >
            <div className='form-title'>Welcome Back</div>

            <div className='form-group'>
              <label htmlFor='loginEmail'>Email Address</label>
              <input
                type='email'
                id='loginEmail'
                placeholder='you@example.com'
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='loginPassword'>Password</label>
              <input
                type='password'
                id='loginPassword'
                placeholder='••••••••'
                required
              />
            </div>

            <button
              className='submit-btn'
              onClick={() => 'handleLogin()'}
            >
              Sign In
            </button>

            <div className='divider'>
              <div className='divider-text'>OR</div>
            </div>

            <button
              className='google-btn'
              onClick={() => 'handleGoogleSignIn()'}
            >
              <div className='google-icon'>🔍</div>
              Sign in with Google
            </button>

            <div className='toggle-section'>
              Don't have an account?
              <a onClick={() => 'switchToRegister()'}>Create one</a>
            </div>
          </div>

          {/*  Register Form  */}
          <div
            id='registerForm'
            className='form-container'
          >
            <div className='form-title'>Create Account</div>

            <div className='form-group'>
              <label htmlFor='registerEmail'>Email Address</label>
              <input
                type='email'
                id='registerEmail'
                placeholder='you@example.com'
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='registerPassword'>Password</label>
              <input
                type='password'
                id='registerPassword'
                placeholder='••••••••'
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='registerConfirm'>Confirm Password</label>
              <input
                type='password'
                id='registerConfirm'
                placeholder='••••••••'
                required
              />
            </div>

            <button
              className='submit-btn'
              onClick={() => 'handleRegister()'}
            >
              Create Account
            </button>

            <div className='divider'>
              <div className='divider-text'>OR</div>
            </div>

            <button
              className='google-btn'
              onClick={() => 'handleGoogleSignUp()'}
            >
              <div className='google-icon'>🔍</div>
              Sign up with Google
            </button>

            <div className='toggle-section'>
              Already have an account?
              <a onClick={() => 'switchToLogin()'}>Sign in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AuthenticationPage
