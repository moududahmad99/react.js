import React, { useState } from 'react'

const ConditionalRenderingAdvance = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const ConditionRender = () => {

    if (isLoggedIn) {
      return (
        <>
          <h4>Hey, User.</h4>
          <p>Welcome to Virtual World!</p>
          <button className='p-3 bg-[#111] text-white px-6' onClick={() => setIsLoggedIn(false)}>Logout</button>
        </>
      )
    } else {
      return (
        <>
          <h4 className='my-3'>Please Login first to enter your dashboard.</h4>
          <button className='p-3 bg-[#111] text-white px-6' onClick={() => setIsLoggedIn(true)}>Login</button>
        </>
      )
    }
  }

  return (
    <>
      <h3 className='font-bold text-2xl'>Conditinal Rendering:</h3>
      {ConditionRender()}
    </>
  )
}

export default ConditionalRenderingAdvance