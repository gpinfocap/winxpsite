import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/types";

interface props {
  id: number;
}

const Quake = ({ id }: props) => {
  const isFocused = useSelector(
    (state: RootState) => state.tab.currentFocusedTab === id
  );
  const frameRef = useRef<HTMLIFrameElement>(null);

  // The game is served from our own origin, so once it has booted we can push
  // console commands into it. The cvar defaults in public/quake/src/sound.js
  // are already low; this re-applies them for anyone whose browser has an
  // archived config from a previous visit.
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    let attempts = 0;
    const timer = setInterval(() => {
      attempts += 1;
      const win = frame.contentWindow as any;
      if (win && typeof win.Cbuf_AddText === "function") {
        win.Cbuf_AddText('volume 0.12\nbgmvolume 0.1\n');
        clearInterval(timer);
      } else if (attempts > 60) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        flex: 1,
        minHeight: 0,
        backgroundColor: "#000",
      }}
    >
      <iframe
        ref={frameRef}
        src="/quake/index.html"
        title="Quake"
        allow="pointer-lock; fullscreen; autoplay; gamepad; xr-spatial-tracking"
        frameBorder="0"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          backgroundColor: "#000",
        }}
      />
      {!isFocused && (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
          }}
        />
      )}
    </div>
  );
};

export default Quake;
