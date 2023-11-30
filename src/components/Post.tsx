import { AnimatePresence, motion } from "framer-motion";
import { PostType } from "../lib/data.types";

export default function Post({ post } : { post: PostType}) {
  return (
    <>
    <AnimatePresence>
      <section className="max-w-xl rounded-xl shadow-xl">
      
        <motion.img
        key={crypto.randomUUID()}
        src={post.image}
        initial={{ x: 2, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -2, opacity: 0 }}
          className="rounded-t-xl max-h-[300px] w-full object-cover"
          
          alt="placeholder"
        />
     
       
        <article className="rounded-b-xl bg-white px-4  py-6">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="mb-4 pt-4 text-base font-light leading-relaxed">
          {post.content}
          </p>
          <button className="rounded bg-yellow-400 px-6 py-2.5 transition-colors duration-300 hover:bg-yellow-300">
            Commenta
          </button>
        </article>
      </section>
      </AnimatePresence>
    </>
  );
}
