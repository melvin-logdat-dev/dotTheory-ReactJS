import { memo } from "react";
import Counter from "./Counter";
import PropTypes from "prop-types";
import Icon from "./Icon";

const Player = ({ name, removePlayer, score, changeScore, id, place }) => {
  return (
    <div className="player">
      {console.log(name + " rendered")}
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>
          ✖
        </button>
        <Icon place={place} />
        {name}
      </span>
      <Counter score={score} id={id} changeScore={changeScore} />
    </div>
  );
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  removePlayer: PropTypes.func,
  score: PropTypes.number.isRequired,
  changeScore: PropTypes.func,
  id: PropTypes.number.isRequired,
  place: PropTypes.number,
};

const playerPropsAreEqual = (prevProps, nextProps) => {
  return (
    prevProps.score === nextProps.score && prevProps.place === nextProps.place
  );
};
export default memo(Player, playerPropsAreEqual);
