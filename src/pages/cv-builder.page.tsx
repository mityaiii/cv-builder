import { Provider } from "react-redux";

import { Container } from "@/components/index";
import { CvDevTools } from "@/modules/index";
import { CvViewer } from "@/modules/index";
import { Drawer } from '@/components/index'
import { store } from "@/store/index";

function CvBuilderPage() {
  return (
    <Provider store={store}>
      <Container type="fluid">
          <Drawer 
            element={<CvDevTools/>} 
          />
          <CvViewer/>
      </Container>
    </Provider>
  )
}

export default CvBuilderPage;