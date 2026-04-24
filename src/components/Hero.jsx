
import Upload from "./uploadarea"
import TextSection from "./TextSection"




export default function Hero(){

    
    return(
        <div className=" sm:px-10 sm:flex items-center sm:justify-start justify-center w-full h-[85%] border">
          
            <Upload />
            <TextSection />
           
        </div>
    )
}