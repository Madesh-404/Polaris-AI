import { createContext, useState } from "react";
import { askGemini } from "../config/config";

export const Context = createContext();


const ContextProvider = (props) => {

    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [previousPrompts, setPreviousPrompts] = useState([])
    const [loading, setLoading] = useState(false)
    const [showResults, setShowResults] = useState(false)
    const [resultData, setResultData] = useState("")

    const delayPara = (index, nextWord) => {
        setTimeout( function (){
            setResultData(prev => prev + nextWord)
        }, 75*index)
    }

    const newChat = () => {
        setShowResults(false)
        setLoading(false)
    }
    
    const onSent = async (prompt) => {
        setResultData("")
        setLoading(true)
        setShowResults(true)
        let response = ""
        if (prompt !== undefined) {
            response = await askGemini(prompt)
        } else {
            setPreviousPrompts(prev => [...prev, input])
            setRecentPrompt(input)
            response = await askGemini(input)
        }
        let responseArray = response.split("**")
        let newResponse = ""
        for(let i = 0; i < responseArray.length; i++) {
            if(i === 0 || i % 2 === 0) {
                newResponse += responseArray[i]
            } else {
                newResponse += "<b>" + responseArray[i] + "</b>"
            }

        }
        let formattedResponse = newResponse.split("*").join("<br/>")
        let finalResponseArray = formattedResponse.split(" ")
        for(let j = 0; j < finalResponseArray.length; j++) {
            let word = finalResponseArray[j]
            delayPara(j, word+" ")
        }
        setResultData(formattedResponse)
        setLoading(false)
        setInput("")
    }

    const contextValue = {
        showResults,
        loading,
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        previousPrompts,
        setPreviousPrompts,
        onSent,
        resultData,
        newChat
    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;