import { useGuests } from "../../context/GuestContext";

function GuestForm() {
  const { handleSubmitForm, pendingGuest, handleNameInput } = useGuests();
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

export default GuestForm;
