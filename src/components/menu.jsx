export default function Menu(){
    const menuSections = [
        {
            items : [
                {title:"Pixlr Editor"},
                {title:"Pixlr Express"},
                {title:"Pixlr"},
                {title:"Remove Bg"}
                 ]
        },
        {
            items :[
                {title:"AI Face Swap"},
                {title:"AI Image Generator"},
                {title:"AI Video Generator"},
                {title:"Nano Banana"},
                {title:"Photo College Maker"}
            ]
        },
        
    ]

   


    return(
        <div className=" p-5 justify-center flex flex-col gap-10 rounded-3xl absolute right-[20px] top-[65px] w-[250px] h-[400px] bg-white">
            {menuSections.map((section)=>
            (
                <div className="flex flex-col gap-4">
                    {section.items.map(title=>(
                         <div className="text-sm ">{title.title}</div>
                    ))}
                </div>
            )
            )}

        </div>
    )
}