import React from 'react'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.min.css" integrity="sha512-QeR2VH+lsBE5LSAe1Q5EnTBbe7XTBubt8dG93Y7gidSgdMCr8nVqKcfKAMyN96SV8KDbZVTDXChatu5G2KQGzg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

const Box = () => {
  return (
    <div>
        <div className="flex justify-center gap-7 py-8">
            <div className="w-35 min-h-45 border-2 border-black rounded-lg bg-white-100 flex">
                <div className='px-3 py-2'>
                <div className='w-7 h-7 bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-300'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original'></img>
                </div>
                </div>
                <div className='px-4.5 py-1.5'>
                <div className='text-xs w-15 h-6 border-2 border-black rounded-lg flex pl-2 pb-6'>
                    Save 
                </div>
                </div>
            </div>           
            <div className="w-35 h-45 border-2 border-black rounded-lg bg-red-100"></div>
            <div className="w-35 h-45 border-2 border-black rounded-lg bg-red-100"></div>
        </div>
        <div className='flex justify-center gap-7 py-4'>
            <div className="w-35 min-h-45 border-2 border-black rounded-lg bg-red-100"></div>           
            <div className="w-35 h-45 border-2 border-black rounded-lg bg-red-100"></div>
            <div className="w-35 h-45 border-2 border-black rounded-lg bg-red-100"></div>
        </div>
    </div>
  )
}

export default Box