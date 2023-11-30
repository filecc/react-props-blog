import Post from './Post';
import { posts } from '../assets/posts';
import PostThumbnail from './PostThumbnail';
import { useState } from 'react';
import { PostType } from '../lib/data.types';
import { AnimatePresence, motion } from 'framer-motion';

export default function Main({ setIsfocused } : { setIsfocused: (value:boolean) => void}) {
  const [ postToShow, setPostToShow ] = useState<PostType | null>(null)
  
  return (
    <main className="grid flex-1 place-items-center px-6">
      <section className={`flex gap-3 items-center flex-wrap ${postToShow && 'blur-lg'}`}>
          {posts.map((post) => {
            if(post.published) {
              return <motion.div key={crypto.randomUUID()} layoutId={post.title}>
                <PostThumbnail setIsfocused={setIsfocused} setPost={setPostToShow} post={post}  />
                </motion.div>
            }
          })}
      </section>

      <AnimatePresence>
        {postToShow && <motion.section layoutId={postToShow.title} className='absolute p-6'>
          <div>
            <Post post={postToShow} />
          </div>
        <button className='mt-2 px-5 py-2 bg-indigo-400 rounded text-white font-bold' onClick={() => {
          setPostToShow(null)
          setIsfocused(false)
          }}>Chiudi</button>
        </motion.section> }
      </AnimatePresence>
     
     
    </main>
  );
}
