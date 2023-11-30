import { PostType } from "../lib/data.types";

export default function PostThumbnail({ post, setPost, setIsfocused } : { post: PostType, setPost: (post: PostType) => void, setIsfocused: (value:boolean) => void}){
    return (
        <>
        <div className="md:h-fit md:w-[200px] rounded-b-lg h-52 bg-gray-50">
            <div className=" max-h-24 overflow-hidden">
                <img className="object-cover rounded-lg w-full" src={post.image} alt={post.title + ' image'} />
            </div>
           <div className="px-2 py-3">
             <h2 className="text-2xl font-semibold">{post.title}</h2>
             <p className="mt-2">{post.content.slice(0, 25) + '...'} <button onClick={()=>{
                setPost(post)
                setIsfocused(true)
                }} className="text-xs text-sky-500 hover:text-sky-700 hover:font-bold transition-colors duration-300">READ MORE</button></p>
           </div>
        </div>
        </>
    )
}