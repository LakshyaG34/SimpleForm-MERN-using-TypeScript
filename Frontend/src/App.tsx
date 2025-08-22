import Signup from "./components/signup";
import Signin from "./components/signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
