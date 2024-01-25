import PropTypes from "prop-types";

const CardFilter = ({ textFilter, setTextFilter }) => {
  const handleText = (e) => {
    setTextFilter(e.target.value);
  };

  return (
    <div>
      <label>
        Search:
        <input type="text" value={textFilter} onChange={handleText} />
      </label>
    </div>
  );
};

CardFilter.propTypes = {
  textFilter: PropTypes.string.isRequired,
  setTextFilter: PropTypes.func.isRequired,
};

export default CardFilter;
