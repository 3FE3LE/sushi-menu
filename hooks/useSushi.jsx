import { useContext } from "react"
import  SushiContext  from "@/context/SushiProvider"

const useSushi = ()=> {
  return useContext(SushiContext)
}

export default useSushi