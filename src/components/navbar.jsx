import {FaHome} from "./icons"
import { CiLogin } from "react-icons/ci";
import { FaCrown,FaUser } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./menu";


export default function NavBar() {


    const IconNames = [
      
      {name:"P",icon:<IoSettingsSharp />,state:"hidden"},
      {name:"P",icon:<FaBell />,state:"hidden"},
      {name:"Y",icon:<GiHamburgerMenu />,state:"visible"}
    ]

    const iconStyle = "text-bold text-xl flex items-center justify-center w-[40px] h-[40px] bg-[#fff1] hover:bg-[#fff2] rounded-full text-white cursor-pointer"
 


  return (
       <div className=" flex justify-between w-full h-[13%]">
        <Menu />
        <div className="p-8
         flex items-center justify-around h-full w-[200px] ">
            <span className="w-[40px] h-[40px] overflow-hidden relative">
              <img
                src="https://pixlr.com/img/ge neral/bg-icon.svg"
                alt="hello"
                className="w-full h-full object-cover rounded-lg"
                />
            </span>
            <span className="font-bold text-white">Remove BG</span>
        </div>
        <div className="flex justify-evenly items-center h-full w-[60%] sm:w-[50%] md:w-[40%] ">

          <div className=" px-2 -w-[auto] rounded-full  text-white flex items-center gap-2 lg:hover:bg-[#fff2]"> 
           <span className={`${iconStyle} lg:hover:bg-transparent lg:bg-transparent`}><FaUser /></span>
            <span className="hidden lg:inline">Log in/Sign up</span>
          </div>
          
          <div className="px-2 w-[auto] rounded-full text-white flex items-center gap-2 lg:hover:bg-[#fff2]">
            <span className={`${iconStyle} lg:hover:bg-transparent lg:bg-transparent`} style={{color:"gold"}}><FaCrown /></span>
            <span className="hidden lg:inline">Try Premium</span>
          </div>
          
           {IconNames.map(item=>(
            <div className={iconStyle}
            >
                {item.icon}
            </div>
           ))}
        </div>
       </div>
  )
}