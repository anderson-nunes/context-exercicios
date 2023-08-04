import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GlobalContext } from './GlobalContext'
import { BASE_URL } from '../constants/url'

export const GlobalState = ({ children }) => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    getAllUsers()
  }, [])

  const headers = {
    headers: {
      Authorization: 'anderson-nunes-easley'
    }
  }

  const getAllUsers = async () => {
    try {
      const response = await axios.get(BASE_URL, headers)
      setUsers(response.data)

    } catch (error) {
      console.log(error.response)
    }
  }

  const data = {
    users,
    setUsers
  }

  return (

    <GlobalContext.Provider value={data}>
      {children}
    </GlobalContext.Provider>
  )
}

