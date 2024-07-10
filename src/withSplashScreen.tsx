import { PropsWithChildren } from "react";
import { useSplashScreen } from "./SplashScreenContext";

interface WithSplashScreenProps {}

export default function WithSplashScreen({
  children,
}: PropsWithChildren<WithSplashScreenProps>) {
  const splashScreen = useSplashScreen();

  return (
    <>
      {splashScreen ? (
        <div className="splash-screen">
          <div className="splash-screen-content">
            <h1>Loading...</h1>
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
