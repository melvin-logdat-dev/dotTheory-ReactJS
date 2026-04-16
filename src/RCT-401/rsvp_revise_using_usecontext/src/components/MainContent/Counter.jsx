import { useGuests } from "../../context/GuestContext";

function Counter() {
  const { totalInvited, numberAttending, unConfirmedGuest } = useGuests();
  return (
    <table className="counter">
      <tbody>
        <tr>
          <td>Attending:</td>
          <td>{numberAttending}</td>
        </tr>
        <tr>
          <td>Unconfirmed:</td>
          <td>{unConfirmedGuest}</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td>{totalInvited}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Counter;
