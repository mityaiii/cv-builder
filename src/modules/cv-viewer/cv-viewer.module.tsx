import { Resume } from "./components/index";
import { useAppSelector } from "@/hooks/index";

function CvViewerModule() {  
  const scale = useAppSelector(state => state.cvReducer.scale)

  return (
    <div className="w-full h-full min-h-screen bg-gradient-to-t from-sky-500 to-blue-200">
      <div className="md:mx-auto w-[211mm] h-[297mm] shadow-[4px_5px_10px_2px_rgba(7,_89,_133,_0.6)]" style={{ transform: `scale(${scale})` }}>
        <Resume/>
      </div>
    </div>
  )
}

export default CvViewerModule;