import { useGuests } from "../../context/GuestContext";

function ConfirmedFilter() {
  const { toggleFilter, isFiltered } = useGuests();
  return (
    <div>
      <h2>Invitees</h2>
      <label>
        <input type="checkbox" onChange={toggleFilter} checked={isFiltered} />{" "}
        Hide those who haven't responded
      </label>
    </div>
  );
}

export default ConfirmedFilter;
