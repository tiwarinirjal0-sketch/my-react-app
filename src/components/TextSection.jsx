





export default function TextSection(){
    

   const Section = ({children, height , className=" "}) =>(
    <div className={`flex w-[auto] justify-center items-center text-center ${height} ${className}`}>
        {children}
    </div>
   )


    return(
    <div className="gap-3 flex flex-col justify-center items-center w-[50%] h-[auto] ">
      <Section height="h-[auto]" className="font-bold text-xl text-white">
            Remove BG with the Background remover! 
      </Section>

      <Section height="h-[auto]" className=" text-xl text-[rgb(153,0,77)]">
         ★ ★ ★ ★ ★
      </Section>

      <Section className="text-gray-200">
        Easily remove background from pictures in a snap with Pixlr. Our AI-powered tool automatically detects and removes backgrounds, ensuring a clean, precise cutout every time.
      </Section>
    </div>
    )
}