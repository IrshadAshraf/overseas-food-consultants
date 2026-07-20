import Home from "@/pages/Home";
import { Route, Routes } from "react-router-dom";
import PageLoader from "@/ui/PageLoader";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#080808] font-sans text-white selection:bg-[#03AAAE] selection:text-white">
      <PageLoader />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
