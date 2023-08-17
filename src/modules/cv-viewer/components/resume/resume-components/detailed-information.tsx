import { useAppSelector } from "@/hooks/index"
import { Container } from "@/components/index"

function DetailedInformation() {
  const { initials, bgColor } = useAppSelector(state => state.cvReducer)

  return (
    <Container className="mt-24" type="normal">
        <h2 className='w-[90%] mx-auto text-4xl uppercase' style={{ color: bgColor }}>{ initials }</h2>
    </Container>
  )
}

export default DetailedInformation