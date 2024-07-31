import { createContext, useState } from "react";
import runChat from "../Components/Chatpage/Config/Gemini"


export const Context = createContext();

const ContextProvider = (props) => {

    const [input, SetInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("")
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, Setloading] = useState(false);
    const [resultData, SetresultData] = useState("");

    const delay = (index, nextWord) => {
        setTimeout(() => {
            SetresultData(prev => prev + nextWord);
        }, 75 * index)
    }

    const newChat = () => {
        Setloading(false);
        setShowResult(false)

    }

    const onSent = async (prompt) => {
        SetresultData("");
        Setloading(true);
        setShowResult(true)
        let response;
        if (prompt !== undefined) {
            response = await runChat(prompt);
            setRecentPrompt(prompt);
        }
        else {
            setPrevPrompts((prev) => [...prev, input])
            setRecentPrompt(input);
            response = await runChat(input);
        }

        let responseArray = response.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];

            } else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }

        let newResponse2 = newResponse.split("*").join("<br/>");
        let newResponeArray = newResponse2.split(" ");
        for (let i = 0; i < newResponeArray.length; i++) {
            const nextWord = newResponeArray[i];
            delay(i, nextWord + " ");
        }
        Setloading(false);
        SetInput("");
    }

    const ContextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        loading,
        resultData,
        input,
        newChat,
        SetInput,
        showResult
    }

    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
}





'use strict';
export default ContextProvider;
