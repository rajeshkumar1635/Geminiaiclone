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
 const delayPara =(index,nextword)=>{
    setTimeout(function(){
        setResultData((prevData) => prevData + nextword);
    }, 75* index);
 }
 const newChat=()=>{
    setLoading(false);
    setShowResult(false);
 }
    const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);

    // Always add the prompt (or input) to prevPrompts
    setPrevPrompts((prev) => [...prev, prompt ?? input]);
    setRecentPrompt(prompt ?? input);

    let res1;
    if (prompt !== undefined) {
        res1 = await main(prompt);
    } else {
        res1 = await main(input);
    }

    let responseArray = res1.split("**");
    let newArray = " ";
    for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1)
            newArray += responseArray[i];
        else
            newArray += "<b>" + responseArray[i] + "</b>";
    }
    let newResponse2 = newArray.split("*").join("</br>");
    let newResponsearray2 = newResponse2.split(" ");
    for (let i = 0; i < newResponsearray2.length; i++) {
        delayPara(i, newResponsearray2[i] + " ");
    }

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
        setInput,
        newChat
        }
    return(
        <context.Provider value={contextValue} >
            {props.children}
        </context.Provider>
    );
}
export default ContextProvider;