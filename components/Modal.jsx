import { CameraIcon } from '@heroicons/react/outline'
import { useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import {auth,db,storage } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { serverTimestamp } from '@firebase/firestore'
function Modal() {
  const [user] = useAuthState(auth)
  const [selectedFile, setSelectedFile] = useState(null)
  const [open, setOpen] = useRecoilState(modalState)
  const [loading, setLoading] = useState(false)
  const filePickerRef = useRef()
  const captionRef = useRef()

  ///Uploading Post

  const uploadPost = async () => {
    if(loading) return
    setLoading(true)

    db.collection("posts").add({
      username: user.displayName,
      caption: captionRef.current.value,
      profileImg: user.photoURL,
      timestamp: serverTimestamp()
    } ).then((doc) => {
      if (selectedFile) {
        const uploadTask = storage
          .ref(`posts/${doc.id}`)
          .putString(selectedFile, "data_url");


        uploadTask.on(
          "state_changed",
          null,
          (error) => {
            // ERROR function
            console.log(error);
          },
          () => {
            // COMPLETE function
            storage
              .ref("posts")
              .child(doc.id)
              .getDownloadURL()
              .then((url) => {
                db.collection("posts").doc(doc.id).set(
                  {
                    postImage: url,
                  },
                  { merge: true }
                );
              });
          }
        );
      }
    });
    setOpen(false)
    setLoading(false)
    setSelectedFile(false)
  }

    

  

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result)
    }

  }
  console.log(selectedFile)

  return (
    <div>
      {open &&
        <div className='fixed flex h-screen items-center justify-center w-[100%] z-10 inset-0 overflow-auto bg-black bg-opacity-10' >

          <div className="flex items-end justify-center min-w-[600px] bg-white rounded-lg px-4 pb-4 text-left overflow-hidden shadow-xl sm:my-0 sm:align-middle sm:max-w-sm sm:w-full sm:p-6 relative mx-4" >

            <div className="flex flex-col gap-4 mt-5 w-full sm:mt-6">

              {selectedFile ? (
                <img src={selectedFile} className='w-full object-contain cursor-pointer' onClick={() => setSelectedFile(null)} alt="" />
              ) : (
                <div
                  onClick={() => filePickerRef.current.click()}
                  className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer '
                >
                  <CameraIcon className='w-6 h-6 text-red-600 ' aria-hidden='true' />
                </div>
              )}

              {/************/}

              <div className="mt-3 text-centr sn:mt-5">
                <h3 className='text-center text-lg leading-6 font-medium text-gray-900'>Upload a Photo</h3>

                <div>
                  <input type="file" hidden ref={filePickerRef} onChange={addImageToPost}
                  />
                </div>

                <div className="mt-2">
                  <input type="text" className='border-none focus:ring-0 w-full text-center' ref={captionRef}
                    placeholder='Enter a Caption' />
                </div>

              </div>
              {/************/}

              <button className='inline-flex justify-center w-full rounded-md border border-t-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300'
                disabled={!selectedFile}
                type='button' onClick={uploadPost} >Upload Post</button>
            </div>
          </div>

        </div>

      }
    </div>
  )
}

export default Modal