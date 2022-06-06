import React from 'react'

const TopNav = () => {
  return (
    <div className='topNav'>
        <div className='topNav-back-btn'>
        <h1>Back</h1>
        </div>
        <div className='topNav-links'>
            <button className='topNav-signup'><h1>Sign up</h1></button>
            <button className='topNav-login'><h1>Log in</h1></button>
        </div>
    </div>
  )
}

export default TopNav