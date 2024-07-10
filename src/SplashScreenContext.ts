import { createContext, useContext } from "react";

export const SplashScreenContext = createContext<boolean>(false);

export const SplashScreenContextProvider = SplashScreenContext.Provider;

export const useSplashScreen = () => {
  return useContext(SplashScreenContext);
}