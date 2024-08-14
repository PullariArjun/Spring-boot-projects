import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import arr from "./Routes/Routes";
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Navigate to="/login" />} />
          {
            arr.map(ele => {
              return (
                <Route element={ele.element} path={ele.path} />
              )
            })
          }
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
