import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavbarAdmin from './components/common/admin/NavbarAdmin'
import LayoutAdmin from './pages/admin/LayoutAdmin'
import LayoutClient from './pages/clients/LayoutClient'
import { AuthContext } from './contexts/AuthProvider'

function App() {
  const { isLogin } = React.useContext(AuthContext);

  return (
    <>
      {isLogin?.role == "admin" || isLogin?.role == "moderator" ? <LayoutAdmin /> : <LayoutClient />}
    </>
  )
}


export default App
