import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import PageTwo from "./PageTwo";
import { useState } from "react";
import DebugPanel from "./DebugPanel";
import { SplashScreenContextProvider } from "./SplashScreenContext";
import WithSplashScreen from "./withSplashScreen";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <WithSplashScreen>
        <Home />
      </WithSplashScreen>
    ),
  },
  {
    path: "page-two",
    element: (
      <WithSplashScreen>
        <PageTwo />
      </WithSplashScreen>
    ),
  },
]);

export const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  return (
    <>
      <SplashScreenContextProvider value={showSplashScreen}>
        <RouterProvider router={router} />
      </SplashScreenContextProvider>
      <DebugPanel
        currentSplashScreenVisibility={showSplashScreen}
        onToggleSplashScreen={() => {
          setShowSplashScreen(!showSplashScreen);
          console.log("Toggled splash screen visibility");
        }}
      />
    </>
  );
};
