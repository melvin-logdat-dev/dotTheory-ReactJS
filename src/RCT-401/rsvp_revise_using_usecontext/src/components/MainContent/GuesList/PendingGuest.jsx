import { useGuests } from "../../../context/GuestContext";

function PendingGuest() {
  const { pendingGuest } = useGuests();

  return (
    <>
      {pendingGuest ? (
        <li className="pending">
          <span>{pendingGuest}</span>
        </li>
      ) : null}
    </>
  );
}

export default PendingGuest;
