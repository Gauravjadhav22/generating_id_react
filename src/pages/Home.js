import React from 'react'
import InputForm from '../components/InputForm'
import mgmLogo from '../assets/logo-g.png'
import userLogo from '../assets/man.png'

const Home = () => {
  return (<>

    <div className='flex flex-col justify-center items-center'>
      <div className='flex items-center mt-4'>

        <img src={mgmLogo} alt='user_img' />
        <h1 className='font-bold ml-2 text-purple-600'>
          MGM CS AND IT
        </h1>
      </div>
      <div className=' my-2 mt-4 w-fit flex flex-col items-center rounded-full shadow-md border px-10 py-4 pb-8 shadow-purple-500'>
        <img src={userLogo} className="rounded-full shadow-sm p-1 shadow-green-400 bg-yellow-200" alt='user_img' width={150} />
        <h1 className='text-4xl font-bold ml-2 text-yellow-400'>I Card Generator</h1>

      </div>
    </div>
    <div className='flex justify-center'>
      <InputForm />

    </div>

  </>

  )
}

export default Home