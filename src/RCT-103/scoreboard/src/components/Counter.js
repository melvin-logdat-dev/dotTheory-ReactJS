import PropTypes from "prop-types";

const Counter = ({ score, id, changeScore }) => {
  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => {
          if (score > 0) {
            changeScore(id, -1);
          }
        }}
      >
        {" "}
        -
      </button>
      <span className="counter-score">{score}</span>
      <button
        className="counter-action increment"
        onClick={() => changeScore(id, +1)}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};

Counter.propTypes = {
  score: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  changeScore: PropTypes.func,
};

export default Counter;
