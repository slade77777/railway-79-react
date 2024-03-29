import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Result from "./components/Result.jsx";

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitted, setSubmitted] = useState(false)

  function submit() {
    console.log(confirmPassword, password)
    // setEmail('')
    // setPassword('')
    if (password !== confirmPassword) {
      alert('confirm password mismatch password')
      return;
    }
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

  function changeConfirmPassword(e) {
    setConfirmPassword(e.target.value)
    setSubmitted(false)
  }

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
        Confirm Password: <input value={confirmPassword} onChange={changeConfirmPassword} />
        <button onClick={submit}>Submit</button>
      </div>
      {
        isSubmitted ? <Result email={email} password={password} /> : <div />
      }
    </>
  )
}

export default App
