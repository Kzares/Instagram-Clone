import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth} from '../firebase'
function MiniProfile() {
  const [user] = useAuthState(auth)

  return (
    <div className='flex items-center justify-between mt-14 ml-10' >
        <img src={"https://lh3.googleusercontent.com/a/AEdFTp6ChirwzyKM-7OXzuWJ4Gk_xSfX_fdqHwB_ItdY=s96-c"} alt="" className='rounded-full border p-[2px] w-16 h-16 ' />

        <div className="flex-1 mx-4">
            <h2 className='font-bold'> @{user.displayName.split(' ').join('').toLocaleLowerCase()} </h2>
            <h3 className='text-sm text-gray-400'>Welome to Instagram</h3>
        </div>

        <button className='text-blue-400 text-sm font-semibold' onClick={() => auth.signOut()}>Sign Out</button>

    </div>
  )
}

export default MiniProfile