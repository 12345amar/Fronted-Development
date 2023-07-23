import React from 'react'
import { UserProvider } from './UserContext'

export default function Context({children}) {
  return (
    <UserProvider>
        {children}
    </UserProvider>
  )
}
