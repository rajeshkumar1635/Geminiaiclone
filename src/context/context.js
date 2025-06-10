import { createContext,useState } from "react";
import main from "../config/gemini";

export const context=createContext();

const ContextProvider = (props) => {
const [input, setInput] = useState("");
const [recentPrompt, setRecentPrompt] = useState("");
const [prevPrompts, setPrevPrompts] = useState([]);
const [showResult, setShowResult] = useState(false);
const [loading, setLoading] = useState(false);
const [resultData  , setResultData] = useState("");

    const onSent=async (input)=>{
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);
       const response=await main(input);
       setResultData(response);
       setLoading(false);
       setInput("");
    }
  
    const contextValue={
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
        }
    return(
        <context.Provider value={contextValue} >
            {props.children}
        </context.Provider>
    );
}
export default ContextProvider;