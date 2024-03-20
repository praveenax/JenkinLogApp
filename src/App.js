import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Upload from "./Pages/UploadPage/Upload";
import Summary from "./Pages/Summary/Summary";

function App() {
  return (
    <>
    <div fluid="lg" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))'}}>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/upload" element={<Upload />}/>
      <Route path="/summary" element={<Summary />}/>




      <Route path="/*" element={<Navigate to="/dashboard" />} />
    </Routes>
    </div>
    </>
  );
}

export default App;
