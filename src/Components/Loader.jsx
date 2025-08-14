import React, { useContext } from "react";
import { LoaderContext } from "../ContextAPIs/LoaderProvider";

const Loader = () => {
  const { loading } = useContext(LoaderContext);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-60 z-50">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-2 border-transparent border-t-indigo-400 border-b-indigo-400 rounded-full animate-spin [animation-duration:1.5s]"></div>

        <div className="absolute inset-2 border-2 border-transparent border-r-purple-400 border-l-purple-400 rounded-full animate-spin [animation-duration:1.8s] [animation-direction:reverse]"></div>

        <div className="absolute inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse shadow-lg shadow-indigo-500/50"></div>

        <div className="absolute top-0 left-1/2 w-2 h-2 bg-indigo-300 rounded-full animate-[orbit_2s_linear_infinite]"></div>
        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-300 rounded-full animate-[orbit_2s_linear_infinite] [animation-delay:-1s]"></div>
      </div>
    </div>
  );
};

export default Loader;
