import { useState } from "react"
import { supabase } from "./supabaseConnection";
import { Navigate, useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSignUp) {
            const { error: signUpError } = await supabase.auth.signUp({
                email, password
            });
            if (signUpError) {
                console.error("Error Signing up:", signUpError.message);
                return;
            }
        } else {
            const { error: signInError } = await supabase.auth.signInWithPassword({
                email, password,
            });
            if (signInError) {
                console.error("Error Signing up", signInError.message)
                return;
            }
        }
        navigate("/")
    };

    return (
        <div className="flex items-center justify-center mt-10 flex-col px-4">
            <img
                src="https://cdn-icons-png.freepik.com/256/15538/15538806.png?semt=ais_hybrid"
                className="w-20 h-20"
                alt="logo"
            />
            <form
                className="flex flex-col items-center w-full max-w-sm mt-4"
                onSubmit={handleSubmit}
            >
                <h3 className="mt-6 text-2xl font-bold text-center mb-6">
                    {isSignUp ? "Sign up to your account" : "Sign in to your account"}
                </h3>
                <div className="w-full mb-4">
                    <label htmlFor="email" className="block mb-1 text-sm font-medium">
                        Email address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter Email"
                        autoComplete="off"
                        className="w-full border p-2 rounded-md text-sm placeholder:text-gray-500"
                    />
                </div>
                <div className="w-full mb-4">
                    <label htmlFor="password" className="block mb-1 text-sm font-medium">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Enter Password"
                        autoComplete="off"
                        className="w-full border p-2 rounded-md text-sm placeholder:text-gray-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full h-10 bg-[#4F39F6] text-white rounded-md font-medium hover:opacity-90 transition mb-4"
                >
                    {isSignUp ? "Sign up" : "Sign in"}
                </button>
                <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="w-full h-10 text-sm underline underline-offset-2 text-black"
                >
                    {isSignUp
                        ? "Already have an account? Sign in"
                        : "Don't have an account? Sign up"}
                </button>
            </form>
        </div>
    );
}

