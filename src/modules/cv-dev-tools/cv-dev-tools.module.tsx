import UploadImage from "components/UI/upload-image";
import DownloadPdf from './download-pdf' 
import { Button, Container, InputRange, PhoneInput, TextInput } from "components/index";
import { useActions, useAppSelector } from "@/hooks/index";
import { InputColor } from "components/index";
import SkillsInput from "./components/skills-input";
import { TextArea } from "components/index";
import ContactsWithIcon from "./components/contacts-with-icon";


function CvDevToolsModule() {
  const { setInitials, setScale, setImageSrc, setJobTitle, setColor, setAboutMe } = useActions()
  const { scale, imgSrc, bgColor, initials, jobTitle, aboutMe, phoneNumber } = useAppSelector(state => state.cvReducer) 

  return (
    <div className="w-80 lg:w-96 bg-sky-800">
      <Container type="normal">
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

        <TextInput
        value={ jobTitle }
        textType='uppercase'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setJobTitle(e.target.value)
        }} 
        placeholder='job title'
        />

        <PhoneInput
        value={ phoneNumber }
        />

        <TextArea
        value={ aboutMe }
        onChange={(val: string) => setAboutMe(val)}
        />

        <SkillsInput/>

        <ContactsWithIcon/>

        <Button promise={() => { DownloadPdf() }}> Download </Button>
      </Container>
    </div>
  )
}

export default CvDevToolsModule;