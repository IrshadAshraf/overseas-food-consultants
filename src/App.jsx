import Home from "@/pages/Home";
import PageLoader from "@/ui/PageLoader";
import { Route, Routes } from "react-router-dom";
import { useCallback, useState } from "react";

function App() {
  const [pageReady, setPageReady] = useState(false);
  const revealPage = useCallback(() => setPageReady(true), []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#080808] font-sans text-white selection:bg-[#03AAAE] selection:text-white">
      <PageLoader onComplete={revealPage} />
      {pageReady && (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
