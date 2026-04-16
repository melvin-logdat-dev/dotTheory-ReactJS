import PropTypes from "prop-types";
import ConfirmedFilter from "./ConfirmedFilter";
import GuesList from "./GuesList";
import Counter from "./Counter";

function MainContent({
  toggleFilter,
  isFiltered,
  totalInvited,
  numberAttending,
  unConfirmedGuest,
  guests,
  toggleConfirmation,
  toggleEditing,
  setName,
  removeGuest,
  pendingGuest,
}) {
  return (
    <div className="main">
      <ConfirmedFilter toggleFilter={toggleFilter} isFiltered={isFiltered} />
      <Counter
        totalInvited={totalInvited}
        numberAttending={numberAttending}
        unConfirmedGuest={unConfirmedGuest}
      />
      <GuesList
        guests={guests}
        toggleConfirmation={toggleConfirmation}
        toggleEditing={toggleEditing}
        setName={setName}
        isFiltered={isFiltered}
        removeGuest={removeGuest}
        pendingGuest={pendingGuest}
      />
    </div>
  );
}

MainContent.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  totalInvited: PropTypes.number.isRequired,
  numberAttending: PropTypes.number.isRequired,
  unConfirmedGuest: PropTypes.number.isRequired,
  guests: PropTypes.array.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  removeGuest: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
};

export default MainContent;
