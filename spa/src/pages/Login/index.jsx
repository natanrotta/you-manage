import React, { useState, useEffect } from 'react';

import { useAuth } from 'hooks/auth';
import { useGQL } from 'hooks/gql';

import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Button, Typography } from 'react-bootstrap'

const Login = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [hasAccount, setHasAccount] = useState(true)

  const { login, token } = useAuth()
  const { mutations } = useGQL()
  const { authenticate } = mutations.user.useAuthenticate()

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
    <section class="">
      <div class="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: 'hsl(0, 0%, 96%)' }}>
        <div class="container">
          <div class="row gx-lg-5 align-items-center">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <h1 class="my-5 display-3 fw-bold ls-tight">
                The best manager <br />
                <span class="text-primary">for your business</span>
              </h1>
              <p style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                quibusdam tempora at cupiditate quis eum maiores libero
                veritatis? Dicta facilis sint aliquid ipsum atque?
              </p>
            </div>

            <div class="col-lg-6 mb-5 mb-lg-0">
              <div class="card">
                <div class="card-body py-5 px-md-5">
                  <form>
                    {!hasAccount && (
                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <label class="form-label" for="form3Example3">First name</label>
                            <input type="text" id="form3Example1" class="form-control" placeholder='First name' />
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <label class="form-label" for="form3Example3">Last name</label>
                            <input type="text" id="form3Example2" class="form-control" placeholder='Last name ' />
                          </div>
                        </div>
                      </div>
                    )}



                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example3">Email address</label>
                      <input type="email" id="form3Example3" class="form-control" placeholder='E-mail' />
                    </div>


                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example4">Password</label>
                      <input type="password" id="form3Example4" class="form-control" placeholder='Password' />
                    </div>


                    <div class="d-grid gap-2 mb-2">
                      <Button type="submit" variant='primary' className='block'>
                        {hasAccount ? 'Log in' : 'Sign up'}
                      </Button>

                      <Button variant='white' className='border-0 block' onClick={() => setHasAccount(!hasAccount)}>
                      {hasAccount ? 'Create an account' : 'Log in'}
                      </Button>
                    </div>


                    <div class="text-center">
                      <p>or sign up with:</p>

                      <Button variant='link'>
                        <FaFacebook size="24" color='#007bb6' className='ml-2' />
                      </Button>

                      <Button variant='link'>
                        <FaGoogle size="24" color='#FF0000 ' className='ml-2' />
                      </Button>

                      <Button variant='link'>
                        <FaGithub size="24" className='ml-2' color='black' />
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
