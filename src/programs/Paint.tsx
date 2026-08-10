import { useSelector } from "react-redux";
import { RootState } from "@/types";

interface props {
  id: number;
}

const Paint = ({ id }: props) => {
  const isFocused = useSelector(
    (state: RootState) => state.tab.currentFocusedTab === id
  );
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        flex: 1,
        minHeight: 0,
      }}
    >
      <iframe
        src="https://jspaint.app"
        title="Paint"
        frameBorder="0"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          backgroundColor: "rgb(192,192,192)",
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

export default Paint;
