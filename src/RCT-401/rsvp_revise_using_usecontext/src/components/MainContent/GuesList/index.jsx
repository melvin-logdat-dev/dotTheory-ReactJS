import Guest from "./Guest";
import PendingGuest from "./PendingGuest";
import { useGuests } from "../../../context/GuestContext";

function GuesList() {
  const {
    guests,
    toggleConfirmation,
    toggleEditing,
    setName,
    isFiltered,
    removeGuest,
    pendingGuest,
  } = useGuests();

  return (
    <ul>
      <PendingGuest name={pendingGuest} />
      {guests
        .filter((guest) => !isFiltered || guest.isConfirmed)
        .map((guest) => (
          <Guest
            key={guest.id}
            id={guest.id}
            name={guest.name}
            isConfirmed={guest.isConfirmed}
            isEditing={guest.isEditing}
          />
        ))}
    </ul>
  );
}

export default GuesList;
