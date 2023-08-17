import UploadImage from "components/UI/upload-image";
import DownloadPdf from './download-pdf' 
import { Button, Container, InputRange, TextInput } from "components/index";
import { useActions, useAppSelector } from "@/hooks/index";
import { InputColor } from "components/index";


function CvDevToolsModule() {
  const { setInitials, setScale, setImageSrc, setColor } = useActions()
  const { scale, imgSrc, bgColor, initials } = useAppSelector(state => state.cvReducer) 

  return (
    <div className="w-80 lg:w-96 min-h-screen h-80 bg-sky-800">
      <Container className="mt-5" type="normal">
        <div className="flex items-center justify-between">
          <UploadImage imgSrc={ imgSrc } setImageSrc={ setImageSrc }/>
          <InputColor color={ bgColor } setColor={ setColor }/>
        </div>

        <TextInput 
        value={ initials }
        textType='uppercase'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInitials(e.target.value)
        }} 
        placeholder='Your Name'/>

        <InputRange 
        value={ scale } 
        promise={(e: React.ChangeEvent<HTMLInputElement>) => setScale(e.target.value)} 
        min="0.1"
        max="2"
        step="0.1"
        />

        <Button promise={() => { DownloadPdf() }}> Download </Button>
      </Container>
    </div>
  )
}

export default CvDevToolsModule;