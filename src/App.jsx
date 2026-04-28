import NavBar from "./components/navbar"
import Hero from "./components/Hero"
import { useState,useCallback } from "react"
import History from "./components/history"





export default function App(){

  const [history, setHistory] = useState([])

  const addToHistory = useCallback((imageUrl)=>{
        setHistory (prev=>[imageUrl, ...prev])
  },[])

  return(
    <div className="w-screen h-screen bg-[#1d2023]">
    <NavBar />
    <Hero onImageProcessed={addToHistory} />
    <History images={history} />
    </div>
  )
}