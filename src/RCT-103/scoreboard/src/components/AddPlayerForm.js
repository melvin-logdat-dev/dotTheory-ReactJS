import { useRef } from "react";

const AddPlayerForm = ({ addPlayer }) => {
  const playerInput = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = playerInput.current.value.trim();
    // to avoid empty input upon clicking "add player" or "enter"
    if (!name) return;
    addPlayer(name);
    e.currentTarget.reset();
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        ref={playerInput}
        placeholder="Enter a player's name"
      />
      <input type="submit" value="Add Player" />
    </form>
  );
};

export default AddPlayerForm;
