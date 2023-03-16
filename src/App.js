import { createContext } from "react";
import ChildA from "./component/ChildA";
const BioData= createContext()
function App() {
  
  return (
    <BioData.Provider value= "Amarjeet">
      <div className="App">
        <ChildA/>
      </div>
    </BioData.Provider>
    
  );
}

export {BioData}
export default App;
