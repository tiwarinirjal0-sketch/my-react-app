import {FaHome} from "./icons"
import { CiLogin } from "react-icons/ci";
import { FaCrown,FaUser } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";


export default function NavBar() {


    const IconNames = [
      {name:"H",icon:<FaUser />},
      {name:"A",icon:<FaCrown />,color:"gold"},
      {name:"P",icon:<IoSettingsSharp />},
      {name:"P",icon:<FaBell />},
      {name:"Y",icon:<GiHamburgerMenu />}
    ]
 
  return (
       <div className="flex justify-between w-full h-[13%] border-b\\">
        <div className="p-8
         flex items-center justify-around h-full w-[200px] ">
            <span className="w-[40px] h-[40px] overflow-hidden relative">
              <img
                src="https://pixlr.com/img/general/bg-icon.svg"
                alt="hello"
                className="w-full h-full object-cover rounded-lg"
                />
            </span>
            <span className="font-bold text-white">Remove BG</span>
        </div>
        <div className="flex justify-evenly items-center h-full w-[60%] sm:w-[50%] md:w-[40%] ">
           {IconNames.map(item=>(
            <div className="text-bold text-xl flex items-center justify-center w-[40px] h-[40px] bg-[#fff1] hover:bg-[#fff2] rounded-full text-white cursor-pointer"
            style={
              {
                color:item.color
              }
            }>
                {item.icon}
            </div>
           ))}
        </div>
       </div>
  )
}