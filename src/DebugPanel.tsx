import "./DebugPanel.css";

interface DebugPanelProps {
  currentSplashScreenVisibility: boolean;
  onToggleSplashScreen: () => void;
}

export default function DebugPanel({
  currentSplashScreenVisibility,
  onToggleSplashScreen,
}: DebugPanelProps) {
  return (
    <div className="debug-panel">
      <button onClick={onToggleSplashScreen}>
        Toggle Splash Screen: {currentSplashScreenVisibility ? "On" : "Off"}
      </button>
    </div>
  );
}
