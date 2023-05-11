import React, { useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Auth = () => {
  const [cookies, setCookies] = useCookies(['access_token'])
  const navigate = useNavigate()

  const logout = () => {
    setCookies('access_token', '')
    window.localStorage.removeItem(userID)
    navigate('/')
  }

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onRegister = async (event) => {
    event.preventDefault()
    try {
      await axios.post('http://localhost:3001/auth/register', {
        email,
        username,
        password,
      })
      alert('Registration successful!')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="">
        <Link to={'/'} className="text-4xl mr-5">
          home
        </Link>
        <Link to={'/login'} className="text-4xl mr-5">
          logino
        </Link>

        {!cookies.access_token ? (
            <Link to={'/auth'} className="text-4xl ml-5">
              register
            </Link>
        ) : (
          <button className='mr-l5' onClick={logout}> logout</button>
        )}
      </div>
      <div className="text-center text-3xl mb-25">
        <form onSubmit={onRegister}>
          <h1 className="text-red-500"> register </h1>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="Password"
            placeholder='pass'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit"> register </button>
        </form>
      </div>
    </div>
  )
}

export default Auth
