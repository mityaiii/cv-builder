import { ShortInformation } from "./resume-components"
import { DetailedInformation } from "./resume-components"

const Resume = () => {
  return (
    <div id="resume" className="flex w-[211mm] h-[297mm] bg-white">
      <ShortInformation/>
      <DetailedInformation/>
    </div>
  )
}

export default Resume