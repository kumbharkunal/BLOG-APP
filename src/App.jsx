import Navbar from "./Navbar"
import LoginPage from "./LoginPage"
import HomePage from "./HomePage"
import NewPost from "./NewPost"
import { useState, useEffect } from "react"
import { supabase } from "./supabaseConnection"
import { Routes, Route } from "react-router-dom"
import SpecificPost from "./SpecificPost"
import { Navigate } from "react-router-dom"
import "./index.css";

function PrivateRoute({ session, children }) {
  if (!session) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const currentSession = await supabase.auth.getSession();
      // console.log(currentSession);
      setSession(currentSession.data.session);
    };
    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return <div className="font-poppin">
    <Navbar sessionInfo={session} logoutFunction={logout} />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/newpost" element={<PrivateRoute session={session}><NewPost /></PrivateRoute>} />
      <Route path="/post/:id" element={<SpecificPost />} />
    </Routes>
  </div>
};