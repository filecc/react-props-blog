import Post from './Post';
import { posts } from '../assets/posts';
import PostThumbnail from './PostThumbnail';
import { useState } from 'react';
import { PostType } from '../lib/data.types';

export default function Main() {
  const [ postToShow, setPostToShow ] = useState<PostType | null>(null)
  
  return (
    <main className="grid flex-1 place-items-center">
      <section className='flex gap-3 items-center'>
          {posts.map((post) => {
            if(post.published) {
              return <PostThumbnail setPost={setPostToShow} post={post} key={crypto.randomUUID()} />
            }
          })}
      </section>
      {postToShow && <div>
       <button className='mb-2 px-5 py-2 bg-indigo-400 rounded text-white font-bold' onClick={() => setPostToShow(null)}>Chiudi</button>
     <Post post={postToShow} />
      </div>}
     
    </main>
  );
}
