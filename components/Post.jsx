import React, { useEffect, useState } from 'react'
import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from '@heroicons/react/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid'
import { addDoc, query, collection, onSnapshot, orderBy, serverTimestamp, setDoc, doc, deleteDoc } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import Moment from 'react-moment'

function Post({ id, timestamp, username, userImage, img, caption }) {
    const [user] = useAuthState(auth)
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([])
    const [likes, setLikes] = useState([])
    const [hasLiked, setHasLiked] = useState(false)

    useEffect(() => onSnapshot(query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')), snapshot => setComments(snapshot.docs)), [db]);

    useEffect(() => onSnapshot(collection(db, 'posts', id, 'likes'), snapshot => setLikes(snapshot.docs)), [db, id])

    useEffect(() => {
        setHasLiked(likes.findIndex((like => like.id === user?.uid)) !== -1)
    }, [likes]);
    ///////////

    const likePost = async () => {
        if (hasLiked) {
            await deleteDoc(doc(db, 'posts', id, 'likes', user.uid))
        } else {
            await setDoc(doc(db, 'posts', id, 'likes', user.uid), {
                username: user.displayName
            })
        }

    }

    const sendComment = async e => {
        e.preventDefault()

        const commentToPost = comment
        setComment('')

        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToPost,
            username: user.displayName,
            userImage: user.photoURL,
            timestamp: serverTimestamp()
        })
    }
    return (
        <div className='bg-white my-7 border-rounded-sm'>

            {/* Header */}
            <div className="flex items-center p-5">
                <img src={userImage} className='rounded-full h-12 w-12 object-contain border p-1 mr-3 ' alt="" />
                <p className='flex-1 font-bold flex flex-col'>
                    {username}
                    <Moment className='text-gray-500 text-xs' fromNow>
                        {timestamp?.toDate()}
                    </Moment>
                </p>

                <DotsHorizontalIcon className='h-5 ' />
            </div>

            {/* Image */}
            <img src={img} className='object-cover max-h-screen w-full' alt="" />

            {/* Buttons */}

            <div className="flex justify-between px-4 pt-4">
                <div className="flex space-4">

                    {
                        hasLiked ? (
                            <HeartIconSolid className='btn text-red-500' onClick={likePost} />
                        ) : (
                            <HeartIcon className='btn' onClick={likePost} />
                        )
                    }

                    <ChatIcon className='btn' />
                    <PaperAirplaneIcon className='btn' />
                </div>

                <BookmarkIcon className='btn' />
            </div>

            {/* Caption */}

            <p className='p-5 truncate'>
                {likes.length > 0 && (
                    <p className='font-bold mb-1'> {likes.length} likes </p>
                )}
                <span className='font-bold mr-1' > {username}</span>  {caption}
            </p>
            {/* Comments */}

            {comments.length > 0 && (
                <div className="ml-10 h-20 overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-50">
                    {comments.map(comment => (
                        <div className="flex flex-center space-x-2 mb-3" key={comment.id}>
                            <img className='h-7 rounded-full' src={comment.data().userImage} alt="" />
                            <p className='flex-1 text-sm'> <span className='font-bold'> {comment.data().username} </span>  {comment.data().comment} </p>

                            <Moment className='pr-5 text-xs' fromNow>
                                {comment.data().timestamp?.toDate()}
                            </Moment>
                        </div>
                    ))}
                </div>
            )}

            {/* Input box */}

            <form className='flex items-center p-4' >
                <EmojiHappyIcon className='btn' />
                <input type="text" className='h-7 border-none flex-1 focus:ring-0 outline-none' placeholder='Add a comment...' value={comment} onChange={e => setComment(e.target.value)} />
                <button type='submit' className='font-semibold text-blue-400' disabled={!comment.trim()} onClick={sendComment} >Post</button>
            </form>



        </div>
    )
}

export default Post