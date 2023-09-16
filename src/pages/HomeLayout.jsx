import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Navbar } from '../components'

function HomeLayout() {
   return (
      <>
         <Header />
         <Navbar />
         <main className='align-elements'>
            <Outlet />
         </main>
      </>
   )
}

export default HomeLayout