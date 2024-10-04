import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dropdown from "./Components/Dropdown";
import PetDetails from "./Components/PetDetails";



function App() {
  return (
    <>
    <BrowserRouter>
    <switch>

    <Routes>
      <Route path= "/" element = {<Dropdown />}></Route>
      <Route path= "/:name" element = {<PetDetails />}></Route>
    </Routes>
    </switch>
    </BrowserRouter>
    </>
  );
}

export default App;
