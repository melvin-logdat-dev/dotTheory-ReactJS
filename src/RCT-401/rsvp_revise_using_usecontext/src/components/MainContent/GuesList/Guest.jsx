import GuestName from "./GuestName";
import { useGuests } from "../../../context/GuestContext";

function Guest({ id, name, isConfirmed, isEditing }) {
  const { toggleConfirmation, toggleEditing, setName, removeGuest } =
    useGuests();

  return (
    <li>
      <GuestName
        isEditing={isEditing}
        name={name}
        handleNameEdits={(e) => setName(e.target.value, id)}
      />
      <label>
        <input
          type="checkbox"
          checked={isConfirmed}
          onChange={() => toggleConfirmation(id)}
        />{" "}
        Confirmed
      </label>

      <button onClick={() => toggleEditing(id)}>
        {isEditing ? "save" : "edit"}
      </button>
      <button onClick={() => removeGuest(id)}>remove</button>
    </li>
  );
}

export default Guest;
