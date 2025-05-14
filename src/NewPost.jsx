import { useState, useEffect } from "react";
import { supabase } from "./supabaseConnection";
import { useParams, useNavigate } from "react-router-dom";

export default function NewPost() {
    const [newPost, setNewPost] = useState({ title: "", content: "" });
    const [userEmail, setUserEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const getUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user) {
                setUserEmail(session.user.email);
            }
        };
        getUser();
    }, []);

    const handleNewPostSubmit = async (e) => {
        e.preventDefault();
        const postWithAuthor = { ...newPost, author_email: userEmail };
        const { error } = await supabase.from('posts').insert(postWithAuthor).single();
        if (error) {
            console.error("Error while adding task:", error.message);
            return;
        }
        setNewPost({});
        navigate("/")
    };

    return (
        <div className="flex flex-col items-center mx-auto mt-5 p-4 shadow-2xl w-full max-w-5xl">
            <h1 className="text-3xl sm:text-4xl mt-5 font-semibold text-center">New Post</h1>
            <form
                className="flex flex-col items-center mt-6 w-full px-4"
                onSubmit={handleNewPostSubmit}
            >
                <input
                    className="border rounded-md h-10 w-full mb-4 p-3 text-base"
                    required
                    onChange={(e) =>
                        setNewPost((prev) => ({ ...prev, title: e.target.value }))
                    }
                    type="text"
                    placeholder="Enter the Title"
                />
                <textarea
                    className="border rounded-md w-full h-90 p-3 mb-5 resize-none text-base"
                    required
                    onChange={(e) =>
                        setNewPost((prev) => ({ ...prev, content: e.target.value }))
                    }
                    placeholder="Write the blog"
                ></textarea>
                <button
                    type="submit"
                    className="w-full sm:w-40 bg-[#4F39F6] text-white rounded-md h-10 hover:bg-[#3c2fd6] transition"
                >
                    Post
                </button>
            </form>
        </div>
    );
}