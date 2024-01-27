import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setSubmitted] = useState(false)

  function submit() {
    console.log(email, password)
    // setEmail('')
    // setPassword('')
    setSubmitted(true);
  }

  function changeEmail(e) {
    setEmail(e.target.value)
    setSubmitted(false)
  }

  function changePassword(e) {
    setPassword(e.target.value)
    setSubmitted(false)
  }

  console.log(isSubmitted);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <p>Login page</p>
        EMail: <input value={email} onChange={changeEmail} />
        Password: <input value={password} onChange={changePassword} />
        <button onClick={submit}>Submit</button>
      </div>
      {
        isSubmitted ? <div>
          Result:
          <p>Email: {email}</p>
          <p>Password: {password}</p>
        </div> : <div />
      }
    </>
  )
}

export default App
