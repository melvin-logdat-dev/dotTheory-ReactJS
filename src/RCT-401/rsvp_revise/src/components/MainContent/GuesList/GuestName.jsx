import PropTypes from "prop-types";

function GuestName({ isEditing, name, handleNameEdits }) {
  return (
    <>
      {isEditing ? (
        <input type="text" value={name} onChange={handleNameEdits} />
      ) : (
        <span>{name}</span>
      )}
    </>
  );
}

GuestName.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  handleNameEdits: PropTypes.func.isRequired,
};

export default GuestName;
