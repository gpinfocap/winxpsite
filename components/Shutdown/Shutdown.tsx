import { useEffect, useState } from "react";
import store from "@/redux/store";
import { restartSystem } from "@/redux/systemSlice";
import styles from "./Shutdown.module.css";

const Shutdown = () => {
  const [poweredOff, setPoweredOff] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPoweredOff(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!poweredOff) {
    return (
      <div className={styles.shuttingdown}>
        <div className={styles.logo}>Windows</div>
        <p className={styles.status}>Windows is shutting down...</p>
      </div>
    );
  }

  return (
    <div className={styles.poweredoff}>
      <p className={styles.safe}>
        It&apos;s now safe to turn off your computer.
      </p>
      <button
        className={styles.restart}
        onClick={() => store.dispatch(restartSystem())}
      >
        Turn it back on
      </button>
    </div>
  );
};

export default Shutdown;
