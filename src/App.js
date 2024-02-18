import React from "react";
import Hello from "./Component/Hello";
import Hii from "./Component/Hii";
import CricketerProvider from "./useContext/CricketerProvider";

function App(){

  return(
    <div> 

      <CricketerProvider>
             {/* <Hii />            */}
             <Hello />
      </CricketerProvider> 
    </div>
  );
}

export default App;