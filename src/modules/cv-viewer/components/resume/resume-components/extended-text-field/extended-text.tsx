function ExtendedText({ title, content, bgColor, iconSrc }: { title: string, content:string, bgColor: string, iconSrc: string | null }) {
  const valueOfContent = content.split('\n')
  
  return (  
    <div className='w-[90%] mx-auto mt-3'>
      <div style={{ color: bgColor }} className='flex items-center gap-x-2'>
        <i>
          { typeof iconSrc === 'string' ? <img className='mt-[20px] w-[32px] h-[32px] -rotate-6' src={ iconSrc }/> : <></> }
        </i>
        <h3 className='text-xl'> { title } </h3>
      </div>

      { valueOfContent.map((el, idx) => 
        <p key={idx} style={{borderColor: bgColor}} className='ml-[10px] mt-3 pl-[10px] text-[1.1rem] border-l-2 border-left'>
          { el }
        </p>
      )}
    </div>
  )
}

export default ExtendedText