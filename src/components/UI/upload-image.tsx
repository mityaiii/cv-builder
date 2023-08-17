import defaultImage from '@/assets/default-avatar.jpg' 
import { ActionCreatorWithPayload } from '@reduxjs/toolkit/dist/createAction'
import { useRef } from 'react'

const UploadImage = ({ imgSrc, setImageSrc }: { imgSrc: string, setImageSrc: ActionCreatorWithPayload<any, "cvData/setImageSrc"> }) => {
  const imgRef = useRef<HTMLInputElement | null>(null)
  
  const handleImgClick = () => {
    if (imgRef.current)  
      imgRef.current.click();
  }

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageSrc(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <div>
      <img className='mx-auto cursor-pointer w-40 h-40 rounded-full' src={ imgSrc || defaultImage } onClick={ () => { handleImgClick() } } />
      <input 
      type='file' 
      className='hidden'
      ref={ imgRef }
      onChange={ e => handleImgChange(e) }
      />
    </div>
  )
}

export default UploadImage