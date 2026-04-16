import PropTypes from "prop-types";
import GuestName from "./GuestName";

function Guest({
  name,
  isConfirmed,
  handleConfirmation,
  handleToggleEditing,
  isEditing,
  setName,
  handleRemoveGuest,
}) {
  return (
    <>
      <li>
        <GuestName
          isEditing={isEditing}
          name={name}
          handleNameEdits={(e) => setName(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={isConfirmed}
            onChange={handleConfirmation}
          />{" "}
          Confirmed
        </label>

        <button onClick={handleToggleEditing}>
          {isEditing ? "save" : "edit"}
        </button>
        <button onClick={handleRemoveGuest}>remove</button>
      </li>
    </>
  );
}

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  handleToggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  handleRemoveGuest: PropTypes.func.isRequired,
};

export default Guest;
