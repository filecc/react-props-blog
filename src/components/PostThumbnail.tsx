import { PostType } from "../lib/data.types";

export default function PostThumbnail({ post, setPost, setIsfocused } : { post: PostType, setPost: (post: PostType) => void, setIsfocused: (value:boolean) => void}){
    return (
        <>
        <div className="md:h-auto md:w-[200px] rounded-b-lg h-fit bg-gray-50">
            <div className=" max-h-24 overflow-hidden">
                <img className="object-cover rounded-lg w-full" src={post.image} alt={post.title + ' image'} />
            </div>
           <div className="px-4 pt-2">
             <h2 className="text-2xl font-semibold">{post.title}</h2>
             <p className="mt-2 pb-3">{post.content.slice(0, 80) + '...'} <button onClick={()=>{
                setPost(post)
                setIsfocused(true)
                }} className="mt-4 text-xs border border-sky-200 px-2 rounded text-sky-500 transition-all duration-300 hover:bg-sky-100 hover:text-sky-600">READ MORE</button></p>
           </div>
        </div>
        </>
    )
}