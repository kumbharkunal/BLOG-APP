import { useEffect, useState } from "react"
import { supabase } from "./supabaseConnection"
import { Link } from "react-router-dom";

export default function HomePage() {
    const [allPosts, setAllPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        setLoading(true);
        let { data } = await supabase
            .from('posts')
            .select('*');
        setAllPosts(data);
        setLoading(false);
    }
    useEffect(() => {
        fetchPosts();
    }, [])

    const truncateContent = (content, maxLength = 100) => {
        if (!content) return "";
        return content.length > maxLength
            ? content.slice(0, maxLength) + " . . . . . . . ."
            : content;
    };

    return (
        <div className="flex justify-center items-center flex-col px-4 sm:px-0">
            <h1 className="text-4xl sm:text-6xl mt-5 text-center">All Blogs</h1>
            {loading ? (
                <div className="relative inline-block h-12 w-12 sm:h-30 sm:w-30 mt-10 sm:mt-40">
                    <svg className="animate-spin h-full w-full text-blue-600" viewBox="0 0 100 100">
                        <circle className="opacity-25 fill-none stroke-current stroke-2" cx="50" cy="50" r="45" stroke-dasharray="164.93" stroke-dashoffset="0"></circle>
                        <circle className="opacity-75 fill-none stroke-current stroke-2" cx="50" cy="50" r="45" stroke-dasharray="164.93" stroke-dashoffset="82.46"></circle>
                    </svg>
                </div>
            ) : (
                allPosts.length === 0 ? (
                    <h1 className="mt-10">No posts yet.</h1>
                ) : (
                    <div className="flex flex-wrap justify-center mt-6">
                        {allPosts.map((post) => {
                            return (
                                <Link
                                    className="mt-4 sm:mt-7 rounded-xl shadow-md sm:shadow-2xl border w-full sm:w-[20rem] md:w-[22rem] lg:w-[25rem] h-auto sm:h-50 flex flex-col items-center m-2 sm:m-4 p-4 hover:scale-105 duration-300" /* Adjusted widths and margins */
                                    to={`/post/${post.id}`}
                                    key={post.id}
                                >
                                    <h2 className="h-auto sm:h-1/ items-center flex text-center font-bold sm:font-extrabold text-lg sm:text-xl">{post.title}</h2> {/* Adjusted font sizes */}
                                    <p className="flex h-auto sm:h-30 w-full items-center justify-center overflow-hidden text-center text-sm sm:text-base mt-2 sm:mt-0">{truncateContent(post.content, 100)}</p> {/* Adjusted content length and font sizes */}
                                </Link>
                            );
                        })}
                    </div>
                )
            )}
        </div>
    );
}