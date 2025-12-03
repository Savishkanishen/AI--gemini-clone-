import { createContext } from "react";
import runChat from "../server/gemini";
import { useState } from "react";



export const Context = createContext();

const ContextProvider = (props) => {

const[input, setInput] = useState("");
const[recentPrompt, setRecentPrompt] = useState(""); 
const[prevPrompts, setPrevPrompts] = useState([]);
const[showResults, setShowResults] = useState(false);
const[loading, setLoading] = useState(false);
const[resultData, setResultData] = useState("");

const onSent = async (prompt) => {
await runChat(input)
}


const contextValue = {
   prevPrompts,
    setPrevPrompts,
    onSent,
    recentPrompt,
    setRecentPrompt,
    showResults,
    setShowResults,
    loading,
    resultData,
    input,
    setInput
}

return (
<Context.Provider value={contextValue}>
{props.children}
</Context.Provider>
);
}

export default ContextProvider;
