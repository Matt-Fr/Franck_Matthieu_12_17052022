import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Profil from "./pages/Profil";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          {/* <Route path="*" element={<Error />}></Route> */}
          <Route path="profil" element={<Profil />}></Route>
          {/* <Route
            path="/rent/:accommodationId"
            element={<Accommodation />}
          ></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
