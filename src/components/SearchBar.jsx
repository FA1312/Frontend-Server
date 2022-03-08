function SearchBar({ filter, handleReset }) {
  const handleSearch = e => {
    filter(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Search for a product" onChange={handleSearch} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
export default SearchBar;
