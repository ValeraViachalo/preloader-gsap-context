import React, { useLayoutEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from 'react-query';

import Home from "./pages/Home/Home";
import gsap from "gsap";
import { Preloader } from "./components/Preloader/Preloader";

const queryC = new QueryClient();

function App() {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, [])

  return (
      <main>
        {
          loaderFinished 
          ? <Home /> 
          : <Preloader timeline={timeline} />
        }
      </main>
  )
}

export default App
