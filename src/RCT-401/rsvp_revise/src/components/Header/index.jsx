import PropTypes from "prop-types";
import GuestForm from "./GuestForm";

function Header({ handleNameInput, handleSubmitForm, pendingGuest }) {
  return (
    <header>
      <h1>RSVP</h1>
      <p>A Treehouse App</p>
      <GuestForm
        handleNameInput={handleNameInput}
        handleSubmitForm={handleSubmitForm}
        pendingGuest={pendingGuest}
      />
    </header>
  );
}

Header.propTypes = {
  handleNameInput: PropTypes.func.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
};

export default Header;
