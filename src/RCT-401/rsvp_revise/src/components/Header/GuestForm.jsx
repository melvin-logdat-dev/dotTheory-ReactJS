import PropTypes from "prop-types";

function GuestForm({ handleSubmitForm, pendingGuest, handleNameInput }) {
  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        value={pendingGuest}
        onChange={handleNameInput}
        placeholder="Invite Someone"
      />
      <button type="submit" name="submit" value="submit">
        Submit
      </button>
    </form>
  );
}

GuestForm.propTypes = {
  handleNameInput: PropTypes.func.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
};

export default GuestForm;
