import { CiFaceMeh, CiVideoOn } from "react-icons/ci";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { GiSparklingSabre } from "react-icons/gi";
import { CgCollage } from "react-icons/cg";





export default function Menu(){
    const menu = [
        {
            items : [
                {name:"Pixlr Editor",imgLink:"https://pixlr.com/img/general/e-icon.svg"},
                {name:"Pixlr Express",imgLink:"https://pixlr.com/img/general/x-icon.svg"},
                {name:"Pixlr Designer",imgLink:"https://pixlr.com/img/general/d-icon.svg"},
                {name:"Remove Bg",imgLink:"https://pixlr.com/img/general/bg-icon.svg"}
            ]
        },
        {
            items : [
                {name:"AI Face Swap",icon:<CiFaceMeh />},
                {name:"AI image Generator",icon:<FaWandMagicSparkles />},
                {name:"AI Video Generator",icon:<CiVideoOn />},
                {name:"Nano Banana",icon:<GiSparklingSabre />},
                {name:"Photo College Maker",icon:<CgCollage />}
            ] 
        },
    ]


    return(
        <div className="absolute w-[300px] h-[430px] right-[30px] top-[60px] bg-white rounded-3xl p-4 flex flex-col gap-10 ">
        {menu.map(section=>(
           <div className="flex flex-col gap-3">
              {section.items.map(menuItems=>(
                <div className="px-2 py-0.5 flex w-full gap-7 text-md  font-bold cursor-pointer hover:bg-gray-200 rounded-xl">
                    <span className="flex items-center justify-center bg rounded-sm w-[20px]">
                        {menuItems.icon?menuItems.icon:(
                          <img src={menuItems.imgLink} className="w-full h-full" />  
                        )}
                    </span>
                    <span>{menuItems.name}</span>
                    
                </div>
              ))}
           </div>
        ))}
        </div>

    )

}