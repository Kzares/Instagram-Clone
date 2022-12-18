import '../styles/globals.css'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth,db} from '../firebase'
import Login from './login'
import Loading from '../components/Loading'
import { useEffect } from 'react'
import firebase from 'firebase/compat/app';
import {RecoilRoot} from 'recoil'
function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth)
  console.log(user)

  useEffect(() => {
    if(user) {
      db.collection('users').doc(user.uid).set({
        email: user.email,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
        photoUrl: user.photoURL,
      },
        {merge: true}
      )
    }
  }, [])

  if(loading) return (
    <RecoilRoot>
      <Loading/>
    </RecoilRoot>
  )
  if(!user) return (
    <RecoilRoot>
      <Login/>
    </RecoilRoot>
  )

  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
