import React from 'react'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.min.css" integrity="sha512-QeR2VH+lsBE5LSAe1Q5EnTBbe7XTBubt8dG93Y7gidSgdMCr8nVqKcfKAMyN96SV8KDbZVTDXChatu5G2KQGzg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

const Box = (data) => {
    console.log("data.user")
  return (
    <div>
        <div className="flex justify-center gap-7 py-7 pt-52">
            <div className="w-55 min-h-70 border-2 border-black rounded-lg bg-white-100 flex bg-red-100">
                <div>
                    <div className='px-17 py-2'>
                        <div className='w-20 h-20 bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-300'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Sk7DymKP8YMYSB-1LSdwqsR463Apgd13yaaV7yoC9Q&s=10'></img>
                        </div>

                        
                    </div>
                    <div className='flex justify-center mt-4'>
                            Name : {data.user}
                    </div>
                    <div className='flex justify-center'>
                         Age : {data.age}
                    </div>
                    <div className='flex justify-center'>
                        Software Developer
                    </div>
                    <div className='px-15 mt-12'>
                        <button className='flex justify-center min-h-5 min-w-7 border-2 rounded-2xl px-1 shadow-lg border-gray-300 bg-green-100 hover:bg-green-300'>
                            View Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Box