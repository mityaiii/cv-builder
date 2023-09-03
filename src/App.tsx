import { FaSadCry } from "react-icons/fa";
import { CvBuilderPage } from "./pages";


export default function App() {
  const width = window.innerWidth;

  return (
    <div className="font-poppins">
      { width < 700 ? 
      <div className="gap-x-2 justify-center text-center mx-auto pt-4 flex items-center">
        <FaSadCry className=' fill-sky-900'/>
        <h3> Sorry, but the app is not yet optimized for phones... </h3>
      </div> : 
      <CvBuilderPage/> }
    </div>
  )  
}