// 



import React from 'react'
import Body from './components/Body'
import Box from './components/Box'

const App = () => { 
  
  return (
    <div className='w-full h-screen flex justify-center items-center'> App
    { 
      user.map(
        ()=>{
          return <Box/>
        }
      )
    }
    </div>
  )
}

export default App