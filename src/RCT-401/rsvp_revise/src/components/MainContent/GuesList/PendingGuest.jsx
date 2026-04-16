import PropTypes from "prop-types";

function PendingGuest({ name }) {
  return (
    <>
      {name ? (
        <li className="pending">
          <span>{name}</span>
        </li>
      ) : null}
    </>
  );
}

PendingGuest.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PendingGuest;
