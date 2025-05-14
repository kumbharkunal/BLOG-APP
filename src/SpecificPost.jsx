import { useEffect, useState } from "react";
import { supabase } from "./supabaseConnection";
import { Link, useParams } from "react-router-dom";

export default function SpecificPost() {
    const { id } = useParams();
    const [singlePost, setSinglePost] = useState("");
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchSinglePost = async () => {
            setLoading(true);
            let { data, error } = await supabase
                .from("posts")
                .select("*")
                .eq("id", id)
                .single();
            if (error) {
                console.error("Error fetching posts:", error.message);
            } else {
                setSinglePost(data);
            }
            setLoading(false);
        };
        fetchSinglePost();
    }, [id]);

    return (
        <div className="flex flex-col items-center px-4 py-6 mx-auto my-4 max-w-7xl shadow-2xl">
            <Link to="/">
                <button className="bg-[#4F39F6] text-white px-4 py-2 rounded-lg mb-6 hover:bg-[#3e2fcc] transition duration-200">
                    GO BACK
                </button>
            </Link>
            {loading ? (
                <div className="relative inline-block h-12 w-12 sm:h-30 sm:w-30 mt-10 sm:mt-40">
                    <svg className="animate-spin h-full w-full text-blue-600" viewBox="0 0 100 100">
                        <circle className="opacity-25 fill-none stroke-current stroke-2" cx="50" cy="50" r="45" strokeDasharray="164.93" strokeDashoffset="0" />
                        <circle className="opacity-75 fill-none stroke-current stroke-2" cx="50" cy="50" r="45" strokeDasharray="164.93" strokeDashoffset="82.46" />
                    </svg>
                </div>
            ) : (
                <>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
                        {singlePost.title}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl mb-8 max-w-5xl">
                        {singlePost.content}
                    </p>
                    <h4 className="text-sm sm:text-base font-medium text-gray-700">
                        <span className="font-semibold">Author's email:</span> {singlePost.author_email}
                    </h4>
                </>
            )}
        </div>
    );
}
