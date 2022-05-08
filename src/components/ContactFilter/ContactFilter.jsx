import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const ContactFilter = ({ value, onChange }) => {
  const filterId = nanoid();

  return (
    <>
      <label htmlFor={filterId}>Find contacts by name</label>

      <input
        id={filterId}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactFilter;
