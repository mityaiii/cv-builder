import { TextInput } from "."
import { FaPlus } from "react-icons/fa";
import UploadImage from "./upload-image";

const IconSrcHoc = ({ updateIconSrc, iconSrc, idx }: { updateIconSrc: Function, iconSrc?: string | React.ReactElement, idx?: number }) => {
  if(typeof iconSrc === 'string') {
    return <UploadImage
    setImageSrc={ (iconSrc: string) => updateIconSrc({ idx, iconSrc }) }
    imgSrc={ iconSrc }
    className='w-[24px] h-[24px] hover:cursor-pointer hover:scale-110 hover:duration-200'
    />
  } 
  else if (iconSrc === undefined || iconSrc === null) {
    return <UploadImage
    setImageSrc={ (iconSrc: string) => updateIconSrc({ idx, iconSrc }) }
    imgSrc={ <FaPlus size={ 20 } 
    className='fill-white hover:cursor-pointer'/> }/>
  }
  else {
    return iconSrc;
  }
}

const TextInputWithIcon: React.FC<any> = ({ updateIconSrc, value, iconSrc, idx, ...rest }: { updateIconSrc: Function, value: string, iconSrc?: string | React.ReactElement, idx?: number }) => {
  return (
    <div className="flex items-center gap-x-2">
      <IconSrcHoc updateIconSrc={updateIconSrc} iconSrc={ iconSrc } idx={idx}/>
      <TextInput 
      value={ value }
      { ...rest }
      />
    </div>
  )
}

export default TextInputWithIcon