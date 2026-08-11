import { cloneElement, ReactNode, useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import styles from "./WinForm.module.css";
import WinToolBar from "components/WinToolbar/WinToolBar";
import { StaticImageData } from "next/image";
import Image from "next/image";
import {
  maximizeTab,
  minimizeTab,
  removeTab,
  setFocusedTab,
} from "@/redux/tabSlice";
import store from "@/redux/store";
import { useSelector } from "react-redux";
import { App, RootState } from "@/types";

const unfocusedAdjustment = "brightness(1.05)";
const MIN_WIDTH = 320;
const MIN_HEIGHT = 200;
type ResizeDir = "e" | "s" | "se";

const WinForm = (props: {
  id: number;
  title: string;
  message: string;
  children: ReactNode;
  icon: StaticImageData;
  zIndex: number;
  programType: App;
  prompt: boolean;
}) => {
  const [isMaximized, setMaximised] = useState(false);
  const [isMinimized, setMinimised] = useState(false);
  const [currX, setX] = useState(0);
  const [currY, setY] = useState(0);
  const [size, setSize] = useState<{ width: number; height: number } | null>(
    null
  );
  const [isMobile, setIsMobile] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);
  const currTabID = useSelector(
    (state: RootState) => state.tab.currentFocusedTab
  );

  // Detected after mount rather than during render so the server and client
  // markup match on first paint.
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const startResize = (event: React.MouseEvent, dir: ResizeDir) => {
    const el = windowRef.current;
    if (!el) return;
    event.preventDefault();
    event.stopPropagation();
    const startWidth = el.offsetWidth;
    const startHeight = el.offsetHeight;
    const originX = event.clientX;
    const originY = event.clientY;

    const handleMove = (moveEvent: MouseEvent) => {
      const nextWidth =
        dir === "s"
          ? startWidth
          : Math.max(MIN_WIDTH, startWidth + moveEvent.clientX - originX);
      const nextHeight =
        dir === "e"
          ? startHeight
          : Math.max(MIN_HEIGHT, startHeight + moveEvent.clientY - originY);
      setSize({ width: nextWidth, height: nextHeight });
    };
    const handleUp = () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleUp);
    };
    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleUp);
  };

  const handleMaximize = () => {
    setMaximised(!isMaximized);
    store.dispatch(maximizeTab({ id: props.id }));
    store.dispatch(setFocusedTab({ id: props.id }));
  };
  const handleMinimize = () => {
    setMinimised(!isMinimized);
    store.dispatch(minimizeTab({ id: props.id }));
    store.dispatch(setFocusedTab({ id: -1 }));
  };

  const handleClose = () => {
    store.dispatch(removeTab({ id: props.id }));
  };
  const handleStop = (event: any, dragElement: any) => {
    setX(dragElement.x);
    setY(dragElement.y);
  };
  let draggableProps;

  // On phones the window is pinned to the viewport, so dragging is disabled.
  if (isMaximized || (isMobile && !props.prompt)) {
    draggableProps = {
      position: { x: 0, y: 0 },
      handle: ".handle",
      bounds: "parent",
    };
  } else {
    draggableProps = {
      defaultPosition: { x: currX, y: currY },
      handle: ".handle",
      bounds: "parent",
      onStop: handleStop,
    };
  }

  const isFullBleed = isMaximized || (isMobile && !props.prompt);
  const canResize = !props.prompt && !isMaximized && !isMobile;

  const promptDisplay = "inline";
  const promptWidth = isMobile ? "90%" : "450px";
  const promptHeight = "auto";
  // "flex" (not "inline") so the column layout in .window actually applies and
  // the body fills the frame down to the resize grip.
  const normalDisplay = isMinimized ? "none" : "flex";

  let normalWidth: string;
  let normalHeight: string;
  if (isMaximized) {
    normalWidth = "100%";
    normalHeight = "calc(100% - 40px)";
  } else if (isMobile) {
    normalWidth = "96%";
    normalHeight = "calc(100% - 90px)";
  } else {
    normalWidth = size ? `${size.width}px` : "750px";
    normalHeight = size ? `${size.height}px` : "75%";
  }

  return (
    <Draggable {...draggableProps}>
      <div
        ref={windowRef}
        style={{
          top: isMaximized ? "0" : isMobile ? "2%" : "10%",
          left: isMaximized ? "0" : isMobile ? "2%" : "20%",
          bottom: isMaximized ? "20px" : undefined,
          position: "absolute",
          display: props.prompt ? promptDisplay : normalDisplay,
          width: props.prompt ? promptWidth : normalWidth,
          height: props.prompt ? promptHeight : normalHeight,
          maxWidth: isFullBleed ? "100%" : "none",
          zIndex: props.zIndex,
        }}
        className={styles.window}
      >
        <div
          onMouseDown={() => {
            store.dispatch(setFocusedTab({ id: props.id }));
          }}
          className={
            currTabID == props.id ? styles.titlebar : styles.titlebar_unfocused
          }
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
            className="handle"
          >
            {!props.prompt && (
              <Image
                width={20}
                height={20}
                alt="icon"
                src={props.icon.src}
                className={styles.icon}
              />
            )}
            <div className={styles.title}>{props.title}</div>
          </div>
          <div className={styles.titlecontrols}>
            {!props.prompt && (
              <div
                onClick={handleMinimize}
                style={{
                  filter: currTabID == props.id ? "" : unfocusedAdjustment,
                }}
                className={styles.minimise}
              />
            )}
            {!props.prompt && (
              <div
                onClick={handleMaximize}
                style={{
                  filter: currTabID == props.id ? "" : unfocusedAdjustment,
                }}
                className={isMaximized ? styles.resize : styles.maximise}
              />
            )}
            <div
              onClick={handleClose}
              style={{
                filter: currTabID == props.id ? "" : unfocusedAdjustment,
              }}
              className={styles.close}
            />
          </div>
        </div>
        <div
          onMouseDown={() => {
            store.dispatch(setFocusedTab({ id: props.id }));
          }}
          className={
            currTabID == props.id
              ? styles.windowborder
              : styles.windowborder_unfocused
          }
        >
          <div className={styles.windowsbody}>
            {!props.prompt && props.programType !== App.PAINT &&
              props.programType !== App.QUAKE && (
              <WinToolBar
                title={props.title}
                icon={props.icon}
                programType={props.programType}
                id={props.id}
              />
            )}
            {props.children}
          </div>
        </div>
        {canResize && (
          <>
            <div
              className={styles.resize_e}
              onMouseDown={(e) => startResize(e, "e")}
            />
            <div
              className={styles.resize_s}
              onMouseDown={(e) => startResize(e, "s")}
            />
            <div
              className={styles.resize_se}
              onMouseDown={(e) => startResize(e, "se")}
            />
          </>
        )}
      </div>
    </Draggable>
  );
};
export default WinForm;
