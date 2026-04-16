import PropTypes from "prop-types";
import Guest from "./Guest";
import PendingGuest from "./PendingGuest";

function GuesList({
  guests,
  toggleConfirmation,
  toggleEditing,
  setName,
  isFiltered,
  removeGuest,
  pendingGuest,
}) {
  return (
    <ul>
      <PendingGuest name={pendingGuest} />
      {guests
        .filter((guest) => !isFiltered || guest.isConfirmed)
        .map((guest) => (
          <Guest
            key={guest.id}
            name={guest.name}
            isConfirmed={guest.isConfirmed}
            isEditing={guest.isEditing}
            handleConfirmation={() => toggleConfirmation(guest.id)}
            handleToggleEditing={() => toggleEditing(guest.id)}
            setName={(text) => setName(text, guest.id)}
            handleRemoveGuest={() => removeGuest(guest.id)}
          />
        ))}
    </ul>
  );
}

GuesList.propTypes = {
  guests: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isConfirmed: PropTypes.bool.isRequired,
      isEditing: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeGuest: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
};

export default GuesList;
