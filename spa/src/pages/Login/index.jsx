import React, { useState, useEffect } from 'react'

import { useAuth } from 'hooks/auth'
import { useGQL } from 'hooks/gql'

const Login = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login, token } = useAuth()
  const { mutations } = useGQL()
  const { authenticate, loading } = mutations.user.useAuthenticate()

  useEffect(() => {
    const checkAuth = () => {
      if (token) {
        history.push('/')
      }
    }

    checkAuth()
  }, [token, history])

  const handleSubmit = async (e) => {
    e.preventDefault()

    await authenticate({
      variables: {
        email,
        password
      }
    })
      .then(async response => {
        console.log(response)
        const { data } = response
        const { UserAuthenticate: authData } = data
        await login(authData.user, authData.token)
      })
      .catch(error => {
        window.alert(error.message)
      })
  }

  return (
    <div>
      login
    </div>
  )
}

export default Login
