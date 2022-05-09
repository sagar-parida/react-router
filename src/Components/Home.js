import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={()=>navigate('summary')}>Place Order</button>
    </div>
  )
}

export default Home
