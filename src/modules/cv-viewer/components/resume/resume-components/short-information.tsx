import { useAppSelector } from "@/hooks/index"
import Avatar from "./avatar"
import Skills from "./skills"
import Contacts from "./contacts"
import LinksWithIcon from "./links-with-icon"

function ShortInformation() {
  const { bgColor } = useAppSelector(state => state.cvReducer)

  return (
    <div className="pt-9 h-full w-5/12" style={{ backgroundColor: bgColor }}>
      <Avatar/>
      <Contacts/>
      <LinksWithIcon/>
      <Skills/>
    </div>
  )
}

export default ShortInformation