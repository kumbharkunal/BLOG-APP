import { Link } from "react-router-dom"

export default function Navbar(props) {
    const { sessionInfo, logoutFunction } = props;

    return (
        <div className="sticky top-0 bg-[#222937] shadow-md z-50 w-full">
            <div className="flex justify-between items-center px-4 py-3">
                {/* Logo */}
                <h1 className="text-white text-2xl font-sail">
                    <Link to="/">BLOG</Link>
                </h1>
                {/* Navigation Links */}
                <ul className="flex items-center text-white gap-2 sm:gap-3 text-sm sm:text-base ml-auto flex-wrap justify-end">
                    <li>
                        <Link className="px-2 py-1 hover:text-gray-300" to="/">Home</Link>
                    </li>
                    {sessionInfo && (
                        <button className="">
                            <Link className="px-2 py-1 bg-[#4caee6] hover:bg-[#8ccbf0] text-black rounded-md" to="/newpost">Create a New Post</Link>
                        </button>
                    )}
                    <li>
                        {sessionInfo ? (
                            <button
                                onClick={logoutFunction}
                                className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md"
                            >
                                Log out
                            </button>
                        ) : (
                            <Link to="/login">
                                <button className="px-3 py-1 bg-green-700 hover:bg-green-800 text-white rounded-md">
                                    Log in
                                </button>
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
}


