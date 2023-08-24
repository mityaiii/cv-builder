import defaultImage from '@/assets/default-avatar.jpg' 
import { useRef } from 'react'

const UploadImage = ({ imgSrc, setImageSrc, className }: { imgSrc: string | React.ReactElement, setImageSrc: Function, className?: string }) => {
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
      { typeof imgSrc === 'string' ? 
        <img className={ className ? className : 'mx-auto cursor-pointer w-40 h-40 rounded-full' } src={ imgSrc || defaultImage } onClick={ () => { handleImgClick() } } />
        : <div onClick={ () => { handleImgClick() } }>{ imgSrc }</div>
      }
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