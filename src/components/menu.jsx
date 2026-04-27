export default function Menu(){
    const menu = [
        {
            items : [
                {name:"Pixlr Editor"},
                {name:"Pixlr Express"},
                {name:"Pixlr"},
                {name:"Remove Bg"}
            ]
        },
        {
            items : [
                {name:"AI Face Swap"},
                {name:"AI image Generator"},
                {name:"AI Video Generator"},
                {name:"Nano Banana"},
                {name:"Photo College Maker"}
            ] 
        },
    ]


    return(
        <div className="absolute w-[200px] h-[400px] right-[30px] top-[60px] bg-white rounded-3xl p-4 flex flex-col gap-10 ">
        {menu.map(section=>(
           <div className="flex flex-col gap-3">
              {section.items.map(menuItems=>(
                <div className="flex w-full gap-7 cursor-pointer hover:bg-gray-200 rounded-xl">
                    <span></span>
                    <span>{menuItems.name}</span>
                    
                </div>
              ))}
           </div>
        ))}
        </div>

    )

}