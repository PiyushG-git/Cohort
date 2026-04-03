import React from 'react'
import { RouterProvider } from 'react-router'
import {router} from './app.routes'
import { useAuth } from '../feactures/auth/hook/useAuth'
import { useEffect } from 'react'

const App = () => {

  const auth = useAuth()

  useEffect(()=>{
    auth.handleGetMe()
  },[])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
