import { useDispatch, useSelector } from "react-redux";
import { changeMessage } from "../features/Cardslice";

function Food() {
  const message = useSelector((state) => state.card.message);
  const dispatch = useDispatch();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>🍕 Food Card</h2>
        <p>{message}</p>
        <button
          onClick={() =>
            dispatch(changeMessage("This is Food Page"))
          }
        >
          Change Text
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  },
  card: {
    padding: "20px",
    width: "250px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
  },
};

export default Food;
