import { useAppSelector } from "@/hooks/index"

const Avatar = () => {
  const { imgSrc } = useAppSelector(state => state.cvReducer)
  return (
    imgSrc 
    ?
    <div className="mb-6 mx-auto items-center justify-center flex rounded-full h-52 w-52 border-white border-[3px]">
      <img className="h-[95%] w-[95%] rounded-full" src={imgSrc} />
    </div>
    : 
    <></>
  )
}

export default Avatar;