import React, { useState, useEffect } from 'react'
import Post from './Post'
import {collection, onSnapshot, orderBy, query} from 'firebase/firestore'
import { db } from '../firebase';

function Posts() {

    const [posts, setPosts] = useState()

    useEffect(() => {
        
        return onSnapshot( query(collection(db, 'posts'), orderBy('timestamp', 'desc')) , snapshot => setPosts(snapshot.docs) );
        
    }, [db]);

    console.log(posts)

  return (
    <div>
        {posts&& posts.map((post) => (
            <Post key={post.id} id={post.id}
            username={post.data().username} timestamp={post.data().timestamp} userImage={post.data().profileImg} img={post.data().postImage} caption={post.data().caption} />
        ))}
    </div>
  )
}

export default Posts