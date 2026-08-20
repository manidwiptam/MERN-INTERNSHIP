import React from 'react'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">

      <div className="w-500px min-h-260px bg-white border border-gray-200 rounded-2xl shadow-lg p-10 
      flex flex-col items-center justify-center gap-10">
 
        <div className="flex justify-center gap-12">
          <div className="w-25 h-25 rounded-full border-2 border-black bg-green-100"></div>
          <div className="w-25 h-25 rounded-full border-2 border-black bg-green-100"></div>
          <div className="w-25 h-25 rounded-full border-2 border-black bg-green-100"></div>
        </div>

        <div className="flex justify-center gap-7">
          <div className="w-30 h-20 border-2 border-black rounded-lg bg-red-100"></div>
          <div className="w-30 h-20 border-2 border-black rounded-lg bg-red-100"></div>
          <div className="w-30 h-20 border-2 border-black rounded-lg bg-red-100"></div>
        </div>

      </div>

    </div>
  )
}

export default App