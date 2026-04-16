import GuestForm from "./GuestForm";
import { useGuests } from "../../context/GuestContext";

function Header() {
  const { handleNameInput, handleSubmitForm, pendingGuest } = useGuests();
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

export default Header;
