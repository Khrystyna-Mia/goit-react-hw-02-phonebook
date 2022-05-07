import PropTypes from 'prop-types';

const ContactElList = ({ name, number, onDelete }) => {
  return (
    <div>
      <p>{name}:</p>
      <span>{number}</span>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

ContactElList.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactElList;
