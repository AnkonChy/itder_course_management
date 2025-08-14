import { useContext } from "react";
import { LoaderContext } from "../ContextAPIs/LoaderProvider";

export const useLoader = () => useContext(LoaderContext);
