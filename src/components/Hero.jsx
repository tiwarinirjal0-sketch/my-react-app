
import Upload from "./uploadarea"
import TextSection from "./TextSection"




export default function Hero({onImageProcessed}){

    
    return(
        <div className=" margin-5 sm:px-10 sm:flex items-center justify-center items-center sm:justify-sjustify-center w-full h-[85%] rounded-2xl bg-[#292c31] ">
          
            <Upload onImageProcessed={onImageProcessed} />
            <TextSection />
           
        </div>
    )
}