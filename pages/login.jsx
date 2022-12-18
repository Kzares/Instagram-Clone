import Head from 'next/head'
import Header from '../components/Header'
import { auth, provider } from '../firebase'
function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert)
    }

    return (
        <div className=''>
            <Head>
                <title>Login</title>
            </Head>
            <Header />

            <div className="flex flex-col items-center justify-center h-screen py-2 px-14 -mt-56 text-center bg-gray-50">

                <img src="https://links.papareact.com/ocw" className = 'w-80'  alt="" />

                <p className="font-xs italic">
                    This is not a REAL app, is built for educational purposes only
                </p>

                <div className="mt-40">
                    <div className="">
                        <button onClick={signIn} className="p-3 bg-blue-500 rounded-lg text-white">Sign in with Google</button>
                    </div>
                </div>
            </div>




        </div>
    )
}
export async function getServerSideProps() {

}
export default Login