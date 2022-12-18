import Image from 'next/image'
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    HomeIcon
} from '@heroicons/react/outline'
import {auth} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

function Header() {
    const [user] = useAuthState(auth)
    const [open, setOpen] = useRecoilState(modalState)

    return (
        <div className='shadow-sm border-b bg-white sticky top-0 z-50 w-[100%] '>

            <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto cursor-pointer">

                <div className="hidden lg:inline-grid relative w-24">
                    <Image src='https://links.papareact.com/ocw' objectFit='contain' layout='fill' />
                </div>
                <div className="lg:hidden flex-shrink-0 relative w-10 cursor-pointer">
                    <Image src='https://links.papareact.com/jjm' objectFit='contain' layout='fill' />
                </div>

                {/* ****** */}

                <div className="max-w-xs">
                    <div className="mt-1 relative p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none"> <SearchIcon className='h-5 w-5 text-gray-500' /> </div>
                        <input className='bg-gray-50 block p-2 w-full pl-10 sm:text-sm focus:ring-black focus:border-black border-gray-300 rounded-md' type="text" placeholder='Search' />
                    </div>
                </div>

                {/* ****** */}

                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className='navBtn' />
                    <MenuIcon className='h-6 md:hidden cursor-pointer ' />

                    {user && (<>

                        <div className="relative navBtn">
                            <PaperAirplaneIcon className='navBtn rotate-45' />
                            <div className="flex absolute -top-1 -right-2 text-xs w-5 bg-red-500 rounded-full items-center justify-center animate-pulse text-white">3</div>
                        </div>
                        <PlusCircleIcon onClick={ () => setOpen(true)} className='navBtn' />
                        <UserGroupIcon className='navBtn' />
                        <HeartIcon className='navBtn' />

                        <img src={user.photoURL} className='h-10 rounded-full cursor-pointer ' alt="" />
                    </>)}
                </div>

            </div>

        </div>
    )
}

export default Header