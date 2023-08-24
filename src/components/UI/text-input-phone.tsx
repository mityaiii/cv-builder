import { FaPhone } from "react-icons/fa";
import { TextInputWithIcon } from ".";
import { useActions } from "@/hooks/useActions";
import getValidPhoneNumber from "@/business-logic/index";

const TextInputPhone: React.FC<any> = ({ value, ...rest }: { value: string }) => {
  const { setPhoneNumber } = useActions()

  return (
    <TextInputWithIcon 
    value={ value }
    iconSrc={ <FaPhone size={20} className="rotate-90 fill-white"/> }
    onChange={ (e: React.ChangeEvent<HTMLInputElement>) => {
      getValidPhoneNumber(e, setPhoneNumber)
    } }
    maxLength={16}
    { ...rest }
    />
  )
}

export default TextInputPhone;
