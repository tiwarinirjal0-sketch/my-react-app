import { IoMdImages } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { useEffect, useRef,useState } from "react";



export default function Hero(){

    const fileref = useRef(null)
    const [image, setImage] = useState(null)

    const handleClick = ()=>{
        fileref.current.click()
    }

    const imageDisplay = (e)=>{
        const selectedFile = e.target.files[0];
        if(selectedFile){
            const url = URL.createObjectURL(selectedFile)
            console.log(url)
            setImage(url)
        }
    }
    
    useEffect(()=>{
         return () => {if(image) URL.revokeObjectURL(image)}
    },[image])

    return(
        <div className="flex items-center justify-center w-full h-full">

            <input 
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileref}
              onChange={imageDisplay}
            />

            <div className=" flex items-center justify-center rounded-4xl w-[90%] h-[70%] bg-[rgb(41,44,49)] ">

                {
                    
                 image ?

                  (
                    <div className=" flex flex-col justify-evenly items-center gap-5 w-[95%] h-[90%]  border-gray-600 border border-dashed rounded-3xl bg-[rgba(0,0,0,0.1)]">
                       <div className="border w-[400px] h-[200px] "><img className="w-[400px] h-[200px]" src={image} alt="" /></div>
                  </div>
                )
                :
                ( <div className=" flex flex-col justify-evenly items-center gap-5 w-[95%] h-[90%]  border-gray-600 border border-dashed rounded-3xl bg-[rgba(0,0,0,0.1)]">

                       <div 
                       onClick={handleClick}
                       className="text-9xl text-gray-300 cursor-pointer hover:text-gray-100"><IoMdImages />
                       </div>

                       <button
                       onClick={handleClick}
                       className="flex items-center justify-center rounded-full p-2 text-white w-[300px] h-[45px] bg-[#99004d] gap-4 font-bold cursor-pointer hover:bg-[]">
                            <span className=""><FaPlus /></span>
                            <span>Select Photo(s)</span>
                       </button>
                </div>)
                
                }
            </div>
           
        </div>
    )
}