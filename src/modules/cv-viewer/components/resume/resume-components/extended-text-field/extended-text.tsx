function ExtendedText({ title, content, bgColor, iconSrc }: { title: string, content:string, bgColor: string, iconSrc: string | null }) {
  return (  
    <div className='w-[90%] mx-auto mt-3'>
      <div style={{ color: bgColor }} className='flex items-center gap-x-2'>
        <i>
          { typeof iconSrc === 'string' ? <img className='mt-[16px] w-[32px] h-[32px] -rotate-6' src={ iconSrc }/> : <></> }
        </i>
        <h3 className='text-2xl'> { title } </h3>
      </div>
      <p style={{borderColor: bgColor}} className='ml-[10px] mt-3 pl-[10px] text-[1.1rem] border-l-2 border-left'>
        { content }
      </p>
    </div>
  )
}

export default ExtendedText