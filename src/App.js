import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignInComponent from "./signInComponent/SignInComponent";
import RegistrationComponent from "./registrationComponent/RegistrationComponent";

function App() {
  return (
    <div className="App">
      {/* <SignInComponent /> */}
      <Routes>
        <Route path="/" element={<SignInComponent />} />
        <Route path="/Registration" element={<RegistrationComponent />} />
      </Routes>
    </div>
  );
}

export default App;
