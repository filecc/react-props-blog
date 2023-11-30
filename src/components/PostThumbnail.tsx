import { PostType } from "../lib/data.types";

export default function PostThumbnail({ post, setPost } : { post: PostType, setPost: (post: PostType) => void}){
    return (
        <>
        <div className="h-fit w-[200px] bg-gray-50 rounded-b-lg">
            <div className=" max-h-24 overflow-hidden">
                <img className="object-cover rounded-lg w-full" src={post.image} alt={post.title + ' image'} />
            </div>
           <div className="px-2 py-3">
             <h2 className="text-2xl font-semibold">{post.title}</h2>
             <p>{post.content.slice(0, 25) + '...'} <button onClick={()=>setPost(post)} className="text-xs text-sky-500 hover:text-sky-700 transition-colors duration-300">READ MORE</button></p>
           </div>
            
        </div>
        </>
    )
}