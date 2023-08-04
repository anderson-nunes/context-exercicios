import React, { useContext } from 'react'
import Card from '../components/Card/Card'
import { GlobalContext } from '../context/GlobalContext'

const Home = () => {

  const context = useContext(GlobalContext)

  const { users } = context

  return (
    <>
      {users.map((user) => {
        return <Card user={user} />
      })}
    </>
  )
}

export default Home


