import { useAppSelector } from "@/hooks/index"
import { Container } from "@/components/index"
import ExtendedTextField from "./extended-text-field/index"

function DetailedInformation() {
  const { initials, jobTitle, bgColor, aboutMe } = useAppSelector(state => state.cvReducer)

  const aboutMeLines = aboutMe.split('\n');

  return (
    <Container className="pt-[5rem]" type="normal">
      <h2 className='w-[90%] mx-auto text-3xl'>{ initials }</h2>
      <h2 className='w-[101.5%] items-center -translate-x-2 mt-5 pb-7 pl-[7%] text-xl text-white' style={{ backgroundColor: bgColor }}> { jobTitle } </h2>
      { aboutMeLines.map((el, idx) =>
        <p key={ idx } className='w-[90%] mx-auto text-lg pt-2'>{ el }</p>
      ) }
      <ExtendedTextField/>
    </Container>
  )
}

export default DetailedInformation