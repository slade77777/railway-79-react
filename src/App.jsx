import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit() {
    console.log(email, password)
    alert(`email is ${email}, password is ${password}`)
    setEmail('')
    setPassword('')
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
        EMail: <input value={email} onChange={e => setEmail(e.target.value)} />
        Password: <input value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={submit}>Submit</button>
      </div>
    </>
  )
}

export default App
