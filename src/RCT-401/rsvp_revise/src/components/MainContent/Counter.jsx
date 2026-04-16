import PropTypes from "prop-types";

function Counter({ totalInvited, numberAttending, unConfirmedGuest }) {
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

Counter.propTypes = {
  totalInvited: PropTypes.number,
  numberAttending: PropTypes.number,
  unConfirmedGuest: PropTypes.number,
};

export default Counter;
