import { createContext } from "react";

export const ToolsContext = createContext({});
/* const contextproviderItems = useMemo(() => ({
    
}))

export const ToolsContextProvider = ({children}) => {
    const [stage, setStage] = useState(0)
    const [contextIshikawaData, setContextIshikawaData] = useState({"name": "inicial"})
    const [context5PqsData, setContext5PqsData] = useState()
    const [contextGUTData, setContextGUTData] = useState()

    function nextStage() {
        console.log("stage+", stage)
        setStage(stage+1)
    }

    function handleIshikawa(data) {
        setContextIshikawaData(data)
        console.log(data)
    }

    return <ToolsContext.Provider 
        value={{ 
            stage, 
            contextIshikawaData,
            setContextIshikawaData,
            context5PqsData, 
            contextGUTData, 
            nextStage,
        }}> {children}
        </ToolsContext.Provider>
} */