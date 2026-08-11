import { StaticImageData } from "next/image";
import { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import styles from "./DesktopIcon.module.css";
import Image from "next/image";

const DesktopIcon = (props: {
  title: string;
  img: StaticImageData;
  appID: number;
  doubleClick: any;
}) => {
  const [selected, setSelected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const HighlightIcon = () => {
    setSelected(!selected);
  };
  const handleClickOutside = (event: { target: any }) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setSelected(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Icons fill a column top to bottom, then wrap into the next one, so they
  // never run off the bottom of the screen behind the taskbar.
  const ICONS_PER_COLUMN = 7;
  const slot = props.appID - 1;
  const column = Math.floor(slot / ICONS_PER_COLUMN);
  const row = slot % ICONS_PER_COLUMN;

  return (
    <Draggable nodeRef={ref} bounds="parent">
      <div
        style={{ top: row * 90 + 50, left: column * 90 }}
        onDoubleClick={props.doubleClick}
        onClick={HighlightIcon}
        className={styles.icon}
        ref={ref}
      >
        <div>
          <div
            className={selected ? styles.iconimage_selected : styles.iconimage}
          >
            <Image
              width={45}
              height={45}
              style={{ maxWidth: "100%" }}
              src={props.img.src}
              alt="icon"
            />
          </div>
        </div>
        <div
          className={selected ? styles.iconlabel_selected : styles.iconlabel}
        >
          <p>{props.title}</p>
        </div>
      </div>
    </Draggable>
  );
};

export default DesktopIcon;
