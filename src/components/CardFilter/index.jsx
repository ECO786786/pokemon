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

export default CardFilter;
